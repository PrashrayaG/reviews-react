import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'; // font awesome
import reviews from './data';

const Review = () => {

  const [index,setIndex] = useState(0); // default value is first item of the array. since our data.js is in array and array are 0 index based
  console.log(people);

  const {name,job,image,text} = people[index];


const checkNumber = (number) => {
  if(number > people.length -1) { // if no. is bigger than the index of last item of array then
    return 0;  // return the first item in the array
  }
  if(number < 0) { // if no. is less than 0 
    return people.length -1;
  }
  return number; // if the no. is neither of the two cases
}


  // for next -person btn
  const nextPerson = () => {
    setIndex((index)=> {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  }

  
  // for prev -person btn
  const prevPerson = () => {
    setIndex((index)=> {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  }

  // for random person (review)
  // const randomPerson =() => {
  //  let randomReview =  Math.floor(Math.random() * people.length); // multiplying by people array
   
  //  setIndex(randomReview)
  // //  console.log(randomReview);
  // }

  // for not getting repition because sometimes random number appears same twice
    const randomPerson =() => {
   let randomReview =  Math.floor(Math.random() * people.length); // multiplying by people array

   if(randomReview === index) {
    randomReview = index + 1;
   }
   setIndex(checkNumber(randomReview))
  //  console.log(randomReview);
  };
   

  return (
    <article className='review'>
      <div className="img-container">
        <img src={image} alt={name} className= 'person-img' />
        <span className='qoute-icon'>
          <FaQuoteRight />
        </span>
      </div>

      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>

      {/* // buttons */}
      <div className="btn-container">
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft/>
        </button>

        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight/>
        </button>

      </div>
      <button className='random-btn'  onClick={randomPerson}>
          Random Review
        </button>

    </article>
  );
};

export default Review;
