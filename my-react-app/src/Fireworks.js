import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Fireworks.module.css';

const CarPage = () => {
  const navigate = useNavigate(); // Corrected to useNavigate
  const cars = [
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/281/548/978/mercedes-benz-amg-gt-car-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/550/444/61/digital-art-car-supercars-lamborghini-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/646/602/420/the-aventador-wallpaper-modified-by-aarif-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/881/385/105/black-car-car-eleanor-vehicle-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/52/178/375/honda-honda-nsx-japanese-cars-jdm-black-cars-hd-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/872/505/291/bmw-bmw-m4-car-cyan-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/410/494/431/racing-f1-car-formula-1-race-car-hd-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/819/755/830/bmw-m5-e39-car-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/666/167/593/dodge-challenger-srt-hellcat-widebody-dodge-challenger-2018-cars-4k-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/376/801/202/yacht-vehicle-lamborghini-terzo-millennio-luxury-yacht-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/529/156/20/lamborghini-aventador-car-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/273/755/675/fast-and-furious-dodge-charger-car-muscle-cars-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/392/133/116/car-bmw-bmw-m4-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/327/192/923/nissan-skyline-gt-r-nissan-skyline-gt-r-r34-car-vehicle-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/100/12/944/car-ferrari-458-vehicle-ferrari-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/582/521/223/ford-mustang-car-muscle-cars-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/590/199/595/dark-car-vehicle-nissan-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/931/875/651/car-mercedes-benz-mercedes-amg-mercedes-amg-gt-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/523/161/186/car-stance-mercedes-benz-sls-amg-futuristic-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/616/403/742/mercedes-benz-amg-gt-s-2016-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/21/406/501/ultra-wide-car-porsche-khyzyl-saleem-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/853/51/788/vehicle-car-ford-mustang-need-for-speed-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/305/180/970/black-car-car-vehicle-sports-car-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/1023/311/684/red-car-car-design-ford-mustang-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/180/1009/141/dodge-dodge-challenger-srt-blue-car-car-dodge-challenger-hd-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/281/548/978/mercedes-benz-amg-gt-car-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/906/926/543/bugatti-chiron-sport-bugatti-supercars-car-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/278/1019/673/forza-games-forza-horizon-3-forza-horizon-lamborghini-aventador-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/168/817/180/tuning-nissan-skyline-gt-r-r35-liberty-walk-nissan-gtr-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/202/872/950/car-lamborghini-huracan-lp-610-4-edit-black-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/936/347/652/lamborghini-car-lamborghini-aventador-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/285/332/1019/vehicles-dodge-challenger-srt-demon-car-dodge-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/628/945/249/car-old-car-classic-car-ford-mustang-shelby-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/702/15/751/nissan-gtr-car-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/751/201/109/car-vehicle-outdoors-dodge-challenger-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/922/618/521/auto-black-machine-nissan-nfs-hd-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/52/178/375/honda-honda-nsx-japanese-cars-jdm-black-cars-hd-wallpaper-preview.jpg' },
    { imageUrl: 'https://c0.wallpaperflare.com/preview/259/493/306/person-car-cloud-sunset.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/245/130/498/car-jdm-nissan-nissan-240sx-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/814/398/352/turbo-drift-mazda-japan-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/66/220/943/bmw-cars-car-sport-car-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/787/18/502/cars-hd-widescreen-high-quality-desktop-hd-lamborghini-aventador-high-resolution-cars-disney-desktop-movie-hd-widescreen-quality-hd-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/459/419/761/car-luxury-vehicle-race-car-performance-car-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/402/508/992/rolls-royce-wraith-rolls-royce-cars-4k-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/228/374/322/mazda-rx-7-car-khyzyl-saleem-night-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/844/44/882/need-for-speed-car-bmw-m3-gtr-vehicle-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/318/745/119/white-toyota-supra-1993-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/471/790/536/c63-amg-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/383/139/665/porsche-911-rwb-porsche-911-german-cars-tuning-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/421/807/752/dodge-dodge-challenger-srt-car-dodge-challenger-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/231/878/574/blue-light-vehicle-dark-rolls-royce-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/464/205/293/car-toyota-supra-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/944/585/315/dodge-challenger-srt-hellcat-widebody-dodge-challenger-2018-cars-4k-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/222/530/323/ford-ford-mustang-boss-429-black-car-car-muscle-car-hd-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/825/184/17/car-vehicle-super-car-supercars-lamborghini-hd-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/176/676/914/nissan-gtr-r35-car-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/898/923/696/machine-mustang-ford-shelby-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/170/119/820/muscle-cars-dodge-charger-burnout-dodge-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/657/707/608/2019-cars-4k-dodge-challenger-srt-hellcat-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/9/669/180/cars-high-resolution-desktop-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/532/454/519/bugatti-bugatti-chiron-dassault-rafale-aircraft-jet-fighter-hd-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/332/659/709/red-car-dodge-dodge-challenger-srt-night-light-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/501/819/674/vehicles-collage-bugatti-chiron-ferrari-laferrari-koenigsegg-jesko-hd-wallpaper-preview.jpg ' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/144/725/265/car-chevrolet-camaro-ss-muscle-cars-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/378/562/350/honda-honda-nsx-jdm-japanese-cars-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/496/187/588/2019-cars-dodge-challenger-srt-hellcat-4k-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/735/874/458/bugatti-chiron-bugatti-2018-cars-hd-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/578/677/98/artwork-car-khyzyl-saleem-mercedes-benz-c63-amg-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/845/503/664/red-car-car-ferrari-458-vehicle-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/787/33/209/amg-g63-mercedes-benz-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/523/127/708/car-cars-1920x1080-plymouth-barracuda-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/945/503/798/chevrolet-chevrolet-camaro-chevy-camaro-ss-gt502-car-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/204/744/869/bmw-bmw-i8-supercar-black-car-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/637/260/930/muscle-dodge-challenger-red-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/928/14/468/car-dodge-vehicle-muscle-car-wallpaper-preview.jpg' }
  ]
  const handleLogout = () => {
    navigate('/'); // Use navigate instead of history
  };

  const handleHiddenButtonClick = () => {
    navigate('/hidden'); // Use navigate instead of history
  };

  return (
    <div className={styles.carPage}>
      <button className={styles.logoutButton} onClick={handleLogout}>Logout</button>
      <button className={styles.hiddenButton} onClick={handleHiddenButtonClick}></button>
      <h1>CARS</h1>
      <div className={styles.carList}>
        {cars.map((car, index) => (
          <div className={styles.carCard} key={index}>
            <img src={car.imageUrl} alt={car.name} className={styles.carImage} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarPage;
