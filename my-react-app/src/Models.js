import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Models.module.css';

const ModelsPage = () => {
  const navigate = useNavigate();
  const models = [
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/978/862/350/blondes-legs-women-russians-karina-toby-2400x1600-people-hot-girls-hd-art-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/261/932/1024/morning-beautiful-girl-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/539/184/12/hot-girl-pics-1920x1200-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/680/533/196/hot-girl-1920x1200-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/58/872/874/hot-girl-picture-1920x1200-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/857/20/995/really-beautiful-blonde-girl-women-s-black-mascara-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/115/89/100/brunettes-women-asians-1280x960-people-hot-girls-hd-art-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/592/44/907/girl-hot-leone-sunny-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/953/898/521/hot-girl-pics-1920x1200-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/515/832/962/hot-girl-pics-1920x1200-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/100/917/81/sexy-girl-exercise-sports-workout-fitness-hd-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/957/517/122/beautiful-beauty-brunette-cute-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/738/612/969/actress-beautiful-beauty-bollywood-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/728/432/979/beautiful-beauty-brunette-cute-wallpaper-preview.jpg' },
    { imageUrl: 'https://www.wallpaperflare.com/women-s-gray-lace-blouse-actress-aindrita-beautiful-beauty-wallpaper-pjcdu' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/576/209/82/beautiful-beauty-brunette-cute-wallpaper-preview.jpg' },
    { imageUrl: 'https://www.wallpaperflare.com/actress-beautiful-beauty-bollywood-brunette-cute-eyes-wallpaper-pgfhc' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/622/559/614/beautiful-beauty-brunette-cute-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/803/364/993/actress-beautiful-beauty-bollywood-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/722/566/523/actress-beautiful-beauty-bollywood-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/977/724/944/actress-beautiful-beauty-bollywood-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/339/830/420/actress-beautiful-beauty-bollywood-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/867/679/795/beautiful-beauty-brunette-cute-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/446/449/77/beautiful-beauty-brunette-cute-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/572/793/167/actress-beautiful-beauty-bollywood-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/368/43/718/actress-amyra-beautiful-beauty-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/525/597/262/beautiful-beauty-brunette-cute-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/962/248/936/actress-beautiful-beauty-bollywood-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/938/428/42/actress-beautiful-beauty-bollywood-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/492/689/73/actress-alisha-beautiful-beauty-wallpaper-preview.jpg ' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/968/801/126/beautiful-beauty-brunette-cute-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/100/824/37/actress-beautiful-beauty-bollywood-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/805/4/841/actress-beautiful-beauty-bollywood-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/240/312/917/actress-beautiful-beauty-bollywood-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/366/995/783/actress-beautiful-beauty-bollywood-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/15/32/929/actress-beautiful-beauty-bollywood-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/159/885/243/actress-aindrita-beautiful-beauty-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/622/535/762/actress-beautiful-beauty-bollywood-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/153/945/188/actress-beautiful-beauty-bollywood-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/744/306/499/actress-avram-beautiful-beauty-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/297/593/78/actress-beautiful-beauty-bollywood-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/783/586/530/actress-amyra-beautiful-beauty-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/775/1009/150/actress-beautiful-beauty-bollywood-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/8/3/662/actress-beautiful-beauty-bhatia-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/880/490/517/actress-beautiful-beauty-bollywood-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/911/687/724/beautiful-beauty-brunette-cute-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/465/996/952/actress-beautiful-beauty-bollywood-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/311/709/72/actress-beautiful-beauty-bollywood-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/366/610/342/beautiful-beauty-brunette-cute-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/397/614/486/actress-beautiful-beauty-bollywood-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/53/906/466/actress-beautiful-beauty-bollywood-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/219/434/417/girl-hot-sexy-eyes-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/960/302/437/actress-beautiful-beauty-bollywood-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/565/667/805/actress-beautiful-beauty-bollywood-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/781/475/736/actress-beautiful-beauty-bollywood-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/407/185/181/beautiful-beauty-brunette-cute-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/648/92/844/beautiful-beauty-brunette-cute-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/488/293/270/beautiful-beauty-brunette-cute-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/276/444/17/actress-beautiful-beauty-bollywood-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/479/50/425/beautiful-beauty-brunette-cute-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/650/153/104/actress-beautiful-beauty-bollywood-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/752/421/194/beautiful-beauty-brunette-cute-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/543/179/673/actress-beautiful-beauty-bollywood-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/559/845/104/actress-aindrita-ray-beautiful-beauty-wallpaper-preview.jpg' },
    { imageUrl: 'https://c4.wallpaperflare.com/wallpaper/762/469/199/beautiful-beauty-brunette-cute-wallpaper-preview.jpg' }
  ];

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className={styles.modelsPage}>
      <button className={styles.logoutButton} onClick={handleLogout}>Logout</button>
      <h1>IMAGES</h1>
      <div className={styles.modelList}>
        {models.map((model, index) => (
          <div className={styles.modelCard} key={index}>
            <img src={model.imageUrl} alt={`Model ${index + 1}`} className={styles.modelImage} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModelsPage;
