
import './MyProjects.scss';
import React, { useState } from 'react';
import './MyProjects.scss';

const MyProjects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      url:"./images/parliament.png", 
      isDone:true,
      title:"ქუთაისის პარლამენტილი"
  },
  {
      url:"./images/parliament.png", 
      isDone:false,
      title:"ქუთაისის პარლამენტილი"
  },
  {
      url:"./images/parliament.png", 
      isDone:true,
      title:"ქუთაისის პარლამენტილი"
  },
  {
    url:"./images/parliament.png", 
    isDone:true,
    title:"ქუთაისის პარლამენტილი"
},
{
  url:"./images/parliament.png", 
  isDone:true,
  title:"ქუთაისის პარლამენტილი"
},
{
url:"./images/parliament.png", 
isDone:true,
title:"ქუთაისის პარლამენტილი"
},
{
url:"./images/parliament.png", 
isDone:true,
title:"ქუთაისის პარლამენტილი"
},
{
url:"./images/parliament.png", 
isDone:true,
title:"ქუთაისის პარლამენტილი"
},
{
url:"./images/parliament.png", 
isDone:false,
title:"ქუთაისის პარლამენტი"
},
{
url:"./images/parliament.png", 
isDone:false,
title:"ქუთაისის პარლამენტი"
},
{
url:"./images/parliament.png", 
isDone:false,
title:"ქუთაისის პარლამენტი"
},
{
url:"./images/parliament.png", 
isDone:false,
title:"ქუთაისის პარლამენტი"
},]
  const filteredProjects = projects.filter(item => {
    if (filter === 'all') {
      return true;
    } else if (filter === 'inProgress') {
      return !item.isDone;
    } else {
      return item.isDone;
    }
  });
console.log(filteredProjects)
  return (
    <main>
      <section className="ourprojects">
        {/* ... (your existing code) */}
        <div className='ourprojects-h'>
        <h1 className='ourprojects-h1'>ჩვენი პროექტები</h1>
        <h2 className='ourprojects-h2'>
          შემთხვევით გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის
          შემქმნელებს,<br />
          რეალურთან მაქსიმალურად მიახლოებული შაბლონი წარუდგინონ შემფასებელს
        </h2>
        </div>
        <div className="buttons">
          <button onClick={() => setFilter('all')}>ყველა პროექტი</button>
          <button onClick={() => setFilter('inProgress')}>მიმდინარე</button>
          <button onClick={() => setFilter('completed')}>დასრულებული</button>
        </div>
      </section>

      <section className="projects-gallery">
        {filteredProjects.map(item => (
          <div className="image-container" key={item.title}>
            <img src={item.url} alt="image_1" className="parliament-image" />
            <h1 className="title">{item.isDone ? 'დასრულებული' : 'მიმდინარე'}</h1>
            <h2 className="subtitle">
            {item.title}
            </h2>
          </div>
        ))}
      </section>
    </main>
  );
};

export default MyProjects;
// const MyProjects = () => {
//   const projects=[
//     {
//         url:"./images/parliament.png", 
//         isDone:true,
//         title:"დასრულებული"
//     },
//     {
//         url:"./images/parliament.png", 
//         isDone:false,
//         title:"დასრულებული"
//     },
//     {
//         url:"./images/parliament.png", 
//         isDone:true,
//         title:"დასრულებული"
//     },
//     {
//       url:"./images/parliament.png", 
//       isDone:true,
//       title:"დასრულებული"
//   },
//   {
//     url:"./images/parliament.png", 
//     isDone:true,
//     title:"დასრულებული"
// },
// {
//   url:"./images/parliament.png", 
//   isDone:true,
//   title:"დასრულებული"
// },
// {
//   url:"./images/parliament.png", 
//   isDone:true,
//   title:"დასრულებული"
// },
// {
//   url:"./images/parliament.png", 
//   isDone:true,
//   title:"დასრულებული"
// },
// {
//   url:"./images/parliament.png", 
//   isDone:true,
//   title:"მიმდინარე"
// },
// {
//   url:"./images/parliament.png", 
//   isDone:false,
//   title:"მიმდინარე"
// },
// {
//   url:"./images/parliament.png", 
//   isDone:true,
//   title:"მიმდინარე"
// },
// {
// url:"./images/parliament.png", 
// isDone:true,
// title:"მიმდინარე"
// },
//   ]
//   return (
//     <main>
//       <section className="ourprojects">
//         <div className='ourprojects-h'>
//         <h1 className='ourprojects-h1'>ჩვენი პროექტები</h1>
//         <h2 className='ourprojects-h2'>
//           შემთხვევით გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის
//           შემქმნელებს,<br />
//           რეალურთან მაქსიმალურად მიახლოებული შაბლონი წარუდგინონ შემფასებელს
//         </h2>
//         </div>
//         <div className="buttons">
//         <button >
//           ყველა პროექტი
//         </button>
//         <button >
//           მიმდინარე
//         </button>
//         <button >
//           დასრულებული
//         </button>
//       </div>
//       </section>
      

//       {/* New containers */}
//       <section className="projects-gallery">
//         {projects.map(item=>{
//             return(<div className="image-container" >
//             <img src={item.url} alt="image_1" className="parliament-image" />
//             <h1 className="title">{item.title}</h1>
//             <h2 className="subtitle">{item.isDone?"ქუთაისის პარლამენტი":"ქუთაისის პარლამენტი"}</h2>
//           </div>)
//         })}
        
//         </section>
//     </main>
//   );
// };

// export default MyProjects;
