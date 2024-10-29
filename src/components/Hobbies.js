import React from 'react';
import HobbiesPic from 'C:\\Users\\onw1cob\\Documents\\React JS\\my-app\\src\\img\\cricket.jpg';

const Hobbies = () => {
  return (
    <section id="hobbies" className="hobbies-section py-5" style={{ backgroundColor: '#ffe6e6' }}>
      <div className="container mt-5 pt-5">
        <h2 className="section-title text-center mb-4">🎉 My Fun Zone</h2>
        <div className="row align-items-center">
          <div className="col-md-8">
            <h3>My Passion Projects and Pastimes</h3>
            <p>
              When I'm not deep in code, you can find me enjoying some of my favorite hobbies. 🎥 I'm a huge movie buff and can spend hours binge-watching everything from thrillers to comedies.
            </p>
            <p>
              I also love playing chess! There's nothing quite like the thrill of a late-night match, where a sneaky checkmate can turn the tide in the blink of an eye—call it my kind of crazy! ♟️
            </p>
            <p>
              And, of course, cricket! 🏏 I grew up loving the game and still enjoy watching matches or playing with friends whenever I get the chance. Maybe one day I'll be the next cricketing legend! (Or, at least, that's what I like to tell myself.) 😅
            </p>
            <p>
              Recently, I've developed an interest in long-term investing. I'm diving into the world of stocks and funds, eager to learn how to make my money work for me. It’s a new adventure that keeps my analytical mind engaged! 📈
            </p>
            <p>
              Apart from that, I enjoy trying out new things, whether it’s learning a new skill, finding a new show to watch, or trying out the latest gadget. Basically, anything to keep life interesting!
            </p>
          </div>
          <div className="col-md-4 mb-4">
            <img
              src={HobbiesPic}
              alt="Hobbies"
              className="img-fluid rounded-circle hobbies-pic"
            />
            <p className="fw-bold mt-2">Investing in fun and memories every day! 💰🎉</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hobbies;


