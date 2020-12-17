import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faLemon,
  faDollarSign,
  faAppleAlt,
  faAtom,
  faBacon,
  faBomb,
  faBullseye,
  faCarrot,
  faChessKing,
  faLightbulb,
} from '@fortawesome/free-solid-svg-icons';
import { Overlay, Button } from '@atomikui/core';

const EasterEgg = ({ isActive, onClick }) => {
  const icons = [
    ['lemon', faLemon],
    ['star', faStar],
    ['carrot', faCarrot],
    ['apple', faAppleAlt],
    ['atom', faAtom],
    ['bacon', faBacon],
    ['bomb', faBomb],
    ['bullseye', faBullseye],
    ['chessking', faChessKing],
    ['dollarsign', faDollarSign],
  ];

  const [score, setScore] = useState(0);
  const [scoreUpdateMessage, setScoreUpdateMessage] = useState(
    'Come on. What do you have to lose?',
  );
  const [slots, setSlots] = useState([]);
  const [shuffling, setShuffling] = useState(null);

  const getRandomIcon = () => {
    const random = Math.floor(Math.random() * icons.length);
    return icons[random];
  };

  const getResults = () => {
    const results = {};
    const winAlert = null;

    slots.forEach(([label]) => {
      if (results[label]) {
        results[label] += 1;
        return;
      }
      results[label] = 1;
    });

    const twoOfAKind = Object.keys(results).length === 2 ? 1000 : 0;
    const threeOfAKind = Object.keys(results).length === 1 ? 5000 : 0;

    const stars = (results.star || 0) * 500;
    const dollarsign = (results.dollarsign || 0) * 100;
    const jackpot = results.bullseye === 3 ? 10000 : 0;

    setScoreUpdateMessage('Not bad. Try again.');

    if (twoOfAKind) {
      setScoreUpdateMessage('You got 2 of a kind!');
    }

    if (threeOfAKind) {
      setScoreUpdateMessage('You got 3 of a kind!');
    }

    if (jackpot) {
      setScoreUpdateMessage('You got a Jackpot!!');
    }

    setScore(
      (prevScore) =>
        prevScore + (twoOfAKind + threeOfAKind + stars + dollarsign + jackpot),
    );
  };

  const shuffleSlots = () => {
    setSlots([getRandomIcon(), getRandomIcon(), getRandomIcon()]);
  };

  const pullLever = () => {
    let counter = 0;

    setShuffling(true);

    const pullInterval = setInterval(() => {
      counter += 1;

      shuffleSlots();

      if (counter === 50) {
        clearInterval(pullInterval);
        setShuffling(false);
      }
    }, 30);
  };

  useEffect(() => {
    shuffleSlots();
  }, []);

  useEffect(() => {
    if (shuffling === false) {
      getResults();
    }
  }, [shuffling]);

  return (
    <Overlay onClick={onClick} isActive={isActive}>
      <div className="slot-machine">
        <div className="slot-machine__light">
          <Icon icon={faLightbulb} size="2x" />
        </div>
        <div className="text-size-24 text-weight-semibold margin-top-16 margin-bottom-16">
          Feeling Lucky?
        </div>
        <div className="slot-machine__hd">
          {slots.map(([label, icon], i) => (
            <div key={`slot-${i + 1}`} className="slot-machine__slot">
              <div>
                <Icon icon={icon} />
              </div>
            </div>
          ))}
        </div>
        {scoreUpdateMessage && (
          <div className="margin-top-16 margin-bottom-16 text-size-20">
            {scoreUpdateMessage}
          </div>
        )}
        <div className="margin-top-16 margin-bottom-16">
          Your score: {score}
        </div>
        <Button theme="red" shape="pill" onClick={pullLever}>
          Pull Lever
        </Button>
      </div>
    </Overlay>
  );
};
EasterEgg.propTypes = {
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
};

EasterEgg.defaultProps = {
  isActive: false,
  onClick: null,
};

export default EasterEgg;
