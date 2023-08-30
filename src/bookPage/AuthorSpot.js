import React from 'react'
import { FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';
const AuthorSpot = () => {
    const productList = [
    { image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfx6RK0hEwBSSo10mfwgLu-mTs3kUTM_pQKiSeOb_LYeqywl88X43cT_aSZvIh1qa89Ow&usqp=CAU',
      name: 'Full name',
      job:'Job title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
      iconone: <FaTwitter size={20} />,
      icontwo: <FaLinkedin size={20} /> ,
      iconthree:<FaFacebook size={20} />,
    },
    { image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfx6RK0hEwBSSo10mfwgLu-mTs3kUTM_pQKiSeOb_LYeqywl88X43cT_aSZvIh1qa89Ow&usqp=CAU',
      name: 'Full name',
      job:'Job title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
     iconone: <FaTwitter size={20} />,
      icontwo: <FaLinkedin size={20} /> ,
      iconthree:<FaFacebook size={20} />,
    },
    { image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfx6RK0hEwBSSo10mfwgLu-mTs3kUTM_pQKiSeOb_LYeqywl88X43cT_aSZvIh1qa89Ow&usqp=CAU',
      name: 'Full name',
      job:'Job title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
     iconone: <FaTwitter size={20} />,
      icontwo: <FaLinkedin size={20} /> ,
      iconthree:<FaFacebook size={20} />,
    },
   
    ];
  return (
    <div className='auth-wrap'>
      <center className='authour-head'>
        <h2>Author Spotlights</h2>
        <p>Meet the talented authors behind our collection of books. Through our Author Spotlights, you'll gain insights into their inspirations, creative processes, and the stories behind their works. Explore their diverse backgrounds and be inspired by their passion for writing.</p>
      </center>
      <div className='author-detail-row'>
        
        {productList.map((product, index) => (
        <div key={index} className="authors-detail">
             <center>
                 <img src={product.image} alt="author" />
                 <p className='auth-name'>{product.name}</p>
                <p className='auth-job'>{product.job}</p>
                <p className='auth-desc'>{product.description}</p>
                
                    <div className='auth-icons'>
                        <a href="#" className='icon-author'>{product.iconone}</a>
                        <a href="#" className='icon-author'>{product.icontwo}</a>
                        <a href="#" className='icon-author'>{product.iconthree}</a>
                    </div>
                
         </center>
        </div>
         
      ))}
      </div>
    </div>
  )
}

export default AuthorSpot
