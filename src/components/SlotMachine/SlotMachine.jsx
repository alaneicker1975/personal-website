import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
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

const SlotMachine = ({ isActive, onClick }) => {
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

  const initialMessage = 'Come on. What do you have to lose?';

  const [isJackpot, setIsJackpot] = useState(false);
  const [score, setScore] = useState(0);
  const [slots, setSlots] = useState([]);
  const [shuffling, setShuffling] = useState(null);
  const [scoreUpdateMessage, setScoreUpdateMessage] = useState(initialMessage);

  const getRandomIcon = () => {
    const random = Math.floor(Math.random() * icons.length);
    return icons[random];
  };

  const triggerJackpot = () => {
    setIsJackpot(true);

    setTimeout(() => {
      setIsJackpot(false);
    }, 7000);
  };

  const getResults = () => {
    const results = {};

    slots.forEach(([label]) => {
      if (results[label]) {
        results[label] += 1;
        return;
      }
      results[label] = 1;
    });

    const twoOfAKindScore = Object.keys(results).length === 2 ? 1000 : 0;
    const threeOfAKindScore = Object.keys(results).length === 1 ? 5000 : 0;

    const jackpot = results.bullseye === 3;
    const jackpotScore = jackpot ? 10000 : 0;

    const starsScore = (results.star || 0) * 100;
    const dollarsignScore = (results.dollarsign || 0) * 500;

    setScoreUpdateMessage('Sorry. Try again.');

    if (dollarsignScore > 0 || starsScore > 0) {
      setScoreUpdateMessage(
        `Not bad. You got $${dollarsignScore + starsScore} points`,
      );
    }
    if (twoOfAKindScore) {
      setScoreUpdateMessage('Nice! You got 2 of a kind!');
    }
    if (threeOfAKindScore) {
      setScoreUpdateMessage('Sweet! You got 3 of a kind!');
    }
    if (jackpot) {
      setScoreUpdateMessage('Whoa! You got a Jackpot!!');
      triggerJackpot();
    }

    setScore(
      (prevScore) =>
        prevScore +
        (twoOfAKindScore +
          threeOfAKindScore +
          starsScore +
          dollarsignScore +
          jackpotScore),
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

  const reset = () => {
    setSlots([icons[1], icons[2], icons[3]]);
    setScore(0);
    setScoreUpdateMessage(initialMessage);
  };

  const quit = () => {
    onClick();
    reset();
  };

  useEffect(() => {
    reset();
  }, []);

  useEffect(() => {
    if (shuffling === false) {
      getResults();
    }
  }, [shuffling]);

  return (
    <Overlay isActive={isActive}>
      <div className="slot-machine">
        <div
          className={classnames('slot-machine__light', {
            'is-jackpot': isJackpot,
          })}
        >
          <Icon icon={faLightbulb} size="2x" />
        </div>
        <div className="text-size-24 text-weight-semibold margin-top-16">
          Feeling Lucky?
        </div>
        <div className="margin-bottom-16">Get 3 bullseyes for a jackpot</div>
        <div className="slot-machine__hd">
          {slots.map(([label, icon], i) => (
            <div key={`slot-${i + 1}`} className="slot-machine__slot">
              <div>
                <Icon icon={icon} title={label} />
              </div>
            </div>
          ))}
        </div>
        {scoreUpdateMessage && (
          <div className="margin-top-16 margin-bottom-16">
            {scoreUpdateMessage}
          </div>
        )}
        <div className="margin-bottom-16 text-weight-semibold">
          Your score: {Number(score).toLocaleString()}
        </div>
        <Button theme="red" shape="pill" onClick={pullLever}>
          spin
        </Button>
        <Button className="margin-top-16" theme="link" onClick={quit}>
          quit game
        </Button>
      </div>
    </Overlay>
  );
};

SlotMachine.propTypes = {
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
};

SlotMachine.defaultProps = {
  isActive: false,
  onClick: null,
};

export default SlotMachine;
