import React from 'react'
import Image from'../images/bigimg.jpg'
const FBody = () => {
    return  (
    <section className='sectionOne'>
            <img  className="bigimage" src={Image} alt="" />
            <div className='text'>
                    <h1 className='Title'>Ask&amp;Answer </h1>
                    <span className='first-speech'>
                    you are connected to the right place: a forum for questions,
                    answers and all the intermediate discussions.
                    Take a look at our rules &amp; our different topics,
                     and start a discussion that interests you today.
                    </span>
                    <button className="fixed-btn">
                        Get started &gt;&gt;
                    </button>
            </div>
    </section>
              );
}
 
export default FBody;