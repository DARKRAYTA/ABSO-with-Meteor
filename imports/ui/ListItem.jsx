import React from 'react';

export default function ListItem({player}) {
  return (
      <article className="bg-contain h-48 profile">
        <div className="p-8 flex b-1 pt-10">
          <img src={"https://cdn.discordapp.com/avatars/" + player.discordid + "/" + player.avatar + ".png?size=64"} alt=""
               className="flex-none w-18 h-18 rounded-lg object-cover bg-gray-100" width="64" height="64"/>
          <div className="border-l-4 border-transparent min-w-0 relative flex-auto sm:pr-20 lg:pr-0 xl:pr-20">
            <h2 className="text-lg font-semibold text-black mb-0.5">
              {player.nickname}
            </h2>
            <dl className="flex flex-wrap text-sm font-medium whitespace-pre">
              <div>
                <dt className="sr-only">Points</dt>
                <dd> · {player.points} points</dd>
              </div>
              <div className="flex-none w-full mt-0.5 font-normal">
                <dt className="inline">Discord Id:</dt>
                {' '}
                <dd className="inline text-black">{player.discordid}</dd>
              </div>
              <div
                  className="absolute top-0 right-0 rounded-full bg-amber-50 text-amber-900 px-2 py-0.5 hidden sm:flex lg:hidden xl:flex items-center space-x-1">
                <dt className="text-amber-500">
                </dt>
              </div>
            </dl>
          </div>
        </div>
      </article>
  )
}
  