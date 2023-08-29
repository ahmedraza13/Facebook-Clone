import React from 'react'
import ReactDOM from 'react-dom/client'
import PostCard from './Post.jsx'
import './post.css'
import profileImage1 from './Images/profile1.png'
import profileImage2 from './Images/profile2.png'
import profileImage3 from './Images/profile3.png'
import profileImage4 from './Images/profile4.jpg'
import mainImage1 from './Images/main1.jpg'
import mainImage2 from './Images/main2.jpg'
import mainImage3 from './Images/main3.jpg'
import mainImage4 from './Images/main4.jpg'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PostCard 
    profileImage={profileImage1}
    name={<b>Saylani Mass IT Training </b>} 
    date="2 mins ago"
    text={<p>Dear Youth of Peshawar (Only Males) <br/> We have organized an 
    amazing workshop on chatbot development for all of you on Monday at SMIT
    Peshawar Campus at 04Pm sharp <br /><br /> Speaker: Sir Inzamam Malik</p>}
    mainImage={mainImage1}
    />
   
   <PostCard 
    profileImage={profileImage2}
    name={<b>K-Electric </b>} 
    date="2 days ago"
    text={<p>Worried about lost bills? Missing out on payments and tired 
      of waiting in long queues? Pay them online. With KE's digital stamp, 
      you can easily maintain proof of payment and access it anytime through
      KE Live App, Website & WhatsApp.</p>}
    mainImage={mainImage2}
    />
  
  <PostCard 
    profileImage={profileImage3}
    name={<b>Daraz </b>} 
    date="1 day ago"
    text={<p>Nothing goes better together than binge-watching your favorite
            show with a cup of Tapal! </p>}
    mainImage={mainImage3}
    />
   <PostCard 
    profileImage={profileImage4}
    name={<b>Samaa TV </b>} 
    date="5 hrs ago"
    text={<p>The ABCs of GST and FED in Pakistan: A must-know for entrepreneurs!</p>}
    mainImage={mainImage4}
    />
  </React.StrictMode>,
)
