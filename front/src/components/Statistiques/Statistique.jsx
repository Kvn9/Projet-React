import React from 'react';

const Statistique = () => {
    return (
        <div class="mt-8 flex justify-center items-center h-full">
        <div class="stats shadow">
        
          <div class="stat">
            <div class="stat-figure text-secondary">
            </div>
            <div class="stat-title text-white font-bold">Intervention</div>
            <div class="stat-value text-fuchsia-500">+31 000</div>
            <div class="stat-desc">↗︎ 3000 (+20%) </div>
          </div>
          
          <div class="stat">
            <div class="stat-figure text-secondary">
            </div>
            <div class="stat-title text-white font-bold">Cabinets</div>
            <div class="stat-value text-fuchsia-500"> +4,200</div>
            <div class="stat-desc">↗︎ 400 (+22%)</div>
          </div>
          
          <div class="stat">
            <div class="stat-figure text-secondary" >
            </div>
            <div class="stat-title font-bold text-white">Vétérinaires</div>
            <div class="stat-value text-fuchsia-500">+ 1,200</div>
            <div class="stat-desc">↗︎ 90 (+14%)</div>
          </div>
          
        </div>
      </div>
      
    );
};

export default Statistique;