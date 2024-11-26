import React from 'react';


const About = () => {
  return (
    <div>
      
        <section className="about h-screen flex items-center justify-start bg-cover bg-center text-white px-10"style={{ backgroundImage: "url(watches-background.webp)"}}>
            <div className="bg-black bg-opacity-60 p-8 rounded-md max-w-lg">
                <h2 className="text-4xl font-bold mb-4" data-aos="fade-up">About Us</h2>
                
                <p>Welcome to Watch World,where we believe a watch is more than just an accessory it is a statment of style,precision,and craftmanship.whether you are a connoisseur or simply appriciate the beauty of well-made watch. we are here to help you find the perfect piece of complimentyour personality.</p>
            </div>
        </section>
        

    </div>
  );
};

export default About