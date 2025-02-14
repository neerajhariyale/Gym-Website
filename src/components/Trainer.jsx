import React from 'react';

const Trainer = () => {
  return (
    <div className="border rounded-xl flex flex-col justify-evenly items-center w-11/12 mx-auto mb-8 p-4">
      <p className="text-center mt-8 font-bold text-2xl sm:text-3xl">EXPERT TRAINER</p>
      <div className="w-16 border-2 border-yellow-500 mt-2"></div>

      <div className="flex flex-col md:flex-row  gap-8 justify-center items-center mt-6 mb-8">
        <div className="flex flex-col h-72 w-full sm:w-64 gap-4 border-2 p-4 justify-center items-center rounded-lg cursor-pointer hover:shadow-2xl transition duration-300">
          <img 
            src="https://lh3.googleusercontent.com/pw/AP1GczMmVV5PfFzpv367grCArhQyRDiVzeE5ZmdNDe0Y3UNbcSh5uBTwIEZ6AjjU3jD6qni-nE-O24fqODhW9l3GetWMwLZVEIiu271Peq_qQRhNyA5KQtU85A1Rrs0uj1lXlkezg3fKnU7j0HnpmqFM4Fg=w716-h740-s-no-gm?authuser=0" 
            alt="Prateek V." 
            className="h-24 w-24 rounded-full object-cover" 
          />
          <p className="text-xl sm:text-2xl font-bold">Prateek V.</p>
          <p className="text-center text-sm sm:text-base px-2">
            Every rep brings you one step closer to your goal. Keep pushing!
          </p>
        </div>

        <div className="flex flex-col h-72 w-full sm:w-64 gap-4 border-2 p-4 justify-center items-center rounded-lg cursor-pointer hover:shadow-2xl transition duration-300">
          <img 
            src="https://assets.zeezest.com/images/PROD_Anupriya_0002_%20_1646993975930.jpg?w=1920&q=75" 
            alt="Anupriya Kapur" 
            className="h-24 w-24 rounded-full object-cover" 
          />
          <p className="text-xl sm:text-2xl font-bold">Anupriya Kapur</p>
          <p className="text-center text-sm sm:text-base px-2">
            Push yourself, because no one else is going to do it for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Trainer;
