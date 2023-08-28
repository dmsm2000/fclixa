import React, { useState } from "react";
import playerImage from "../assets/player.jpg";
import { Player } from "../model/PlayerModel";

const PlayerCard = ({ player }: { player: Player }) => {
  return (
    <div className="flex items-center justify-center bg-slate-100">
      <div className="group h-96 w-80 [perspective:1000px]">
        <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className="absolute inset-0">
            <img
              className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
              src={playerImage}
              alt=""
            />
          </div>
          <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="flex min-h-full flex-col items-center justify-center">
              <h1 className="text-3xl font-bold">{player.nome}</h1>
              <p className="text-lg">{player.posicao}</p>
              <p className="text-base">
                {player.idade} anos, {player.nacionalidade}
              </p>
              <p className="text-base">Altura: {player.altura} cm</p>
              <p className="text-base">Peso: {player.peso} kg</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
