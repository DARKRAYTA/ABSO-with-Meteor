import { Meteor } from 'meteor/meteor'
import dotenv from 'dotenv'
import path from 'path'
dotenv.config({path: path.join(process.cwd().replace(/.meteor.*$/, ''), '.env')})//Percorso complesso perché è tutto compilato
import { Players } from "/imports/api/collections"
const Discord = require('discord.js');
const client = new Discord.Client();
client.token=process.env.DISCORD_TOKEN;

const insertPlayer = player => Players.insert(player);

Meteor.startup(async() => {
    Players.rawCollection().drop();
    if (Players.find().count() === 0) {
        [
            {
                discordid: "246710308817731585",
                week: 1,
                points: 3,
                avatar: null,
                nickname: null
            },
            {
                discordid: "355380080228433921",
                week: 1,
                points: 1,
                avatar: null,
                nickname: null
            },
            {
                discordid: "308273491541622794",
                week: 1,
                points: 34,
                avatar: null,
                nickname: null
            },
            {
                discordid: "355380080228433921",
                week: 2,
                points: 3,
                avatar: "",
                nickname: ""
            },
            {
                discordid: "246710308817731585",
                week: 2,
                points: 3,
                avatar: "",
                nickname: ""
            }
        ].forEach(insertPlayer)
    }

    await Promise.all( Players.find({}).fetch().map( async (player) => {
        try{
            const discordPlayer = await client.users.fetch(player.discordid);
            const {_id} = await Players.findOne({discordid: player.discordid, week: player.week});
            await Players.update(_id, {
                    $set: {
                        discordid: player.discordid,
                        week: player.week,
                        points: player.points,
                        avatar: discordPlayer.avatar,
                        nickname: discordPlayer.username
                    }
                }
            );
        }catch(err){
            console.log(err);
        }
    }));

    await Players.find().fetch().forEach((player)=>{
        console.log(player);
    });

});