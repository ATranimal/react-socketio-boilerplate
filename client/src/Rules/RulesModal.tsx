import React from "react";
import "./RulesModal.scss";

export const RulesModal = () => {
  return (
    <div className="rules-modal">
      <h1>Rules</h1>
      <p>
        Decide together whether you are building a city, a country, a planet, or
        something else. This is now your WORLD.{" "}
      </p>
      <p>
        The player who has built the most worlds goes first. Decide turn order.{" "}
      </p>
      <p>There are four types of cards: THEME, EVENT, THING and INHABITANT. </p>
      <p>
        The first player draws the THEME card. THEME cards prompt you to use
        information from your own life to inspire the beginnings of your world.
        They take a little more creative energy than EVENT, THING or INHABITANT
        cards, so it’s a good idea to let the most experienced worldbuilder
        among you go first.
      </p>
      <p>
        The player who draws the card (the drawer) reads its contents aloud,
        then briefly answers the questions on the card. Then, going clockwise,
        each player asks the drawer a yes-or-no question about the answers the
        drawer provided. The drawer can answer as they like. If they say yes,
        they must expand on the information given. If they say no, they must
        provide an alternative. Whatever answer they give, it must be consistent
        with previous answers. A good yes-or-no question suggests an interesting
        new direction for the card while also leaving room for the drawer to
        expand or clarify their idea.
      </p>
      <p>
        Once all players have asked a question, the drawer’s turn is over. The
        next player may draw either an EVENT, THING or INHABITANT card. By the
        end of the game, you must have drawn at least one of each card type.
      </p>
      <p>
        Continue until your world is sufficiently complete, or until your time
        is up.
      </p>
      <h2>Question Examples</h2>
      <h3>Example #1</h3>
      <p>
        The drawer describes a sword that was used during the Great War. The
        sword itself was actually rather plain, but it has come to be remembered
        as the mythical power that ended the war. It was owned by a prominent
        family for a number of centuries but has since been lost.
      </p>
      <p>
        <b>Bad question: Is the sword old?</b>
      </p>
      <p>
        This question is too open-ended - what does “old” really mean, anyways?
        - and doesn’t suggest anything interesting about the sword.
      </p>
      <p>
        <b>
          Good question: After the Great War, was the sword lost to everyone, or
          just to the historical record? Did anyone encounter it not realizing
          its importance?
        </b>
      </p>
      <p>
        This question gives two options, both of which lead to interesting new
        directions for the world: either the sword was encountered by someone
        once, suggesting an interesting story or legend, or the sword was
        utterly lost to everyone, suggesting that the legend of its use in the
        Great War was powerful enough to endure even though no one saw it.
      </p>
      <h3>Example #2</h3>
      <p>
        The drawer describes John Smith, a hero who made a great sacrifice to
        save the land.
      </p>
      <p>
        <b>Bad question: Did John Smith have a girlfriend?</b>
      </p>
      <p>
        This question doesn’t suggest anything new about John Smith or how he
        fit into the world. It’s also too specific without giving any new
        information.
      </p>
      <p>
        <b>Good question: Was John Smith mourned when he made his sacrifice?</b>
      </p>
      <p>
        This question still asks for the same information as its worse
        counterpart - if John Smith was in love, his lover would have mourned
        him when he died. However, it also gives the drawer room to expand on
        others in John’s life, including his family, friends, children, peers or
        even his enemies.
      </p>
      <h3>Example #3</h3>
      <p>
        The drawer describes the Battle for the Bay, a decisive battle in the
        civil war that is commemorated every year.
      </p>
      <p>
        <b>
          Bad Question: Was the Battle for the Bay fought on the water or the
          land?
        </b>
      </p>
      <p>
        Why does it matter where it was fought? How does that impact the people
        who commemorate it now? This question doesn’t suggest very much new
        information about the world and doesn’t incorporate very much from the
        drawer’s initial answer.
      </p>
      <p>
        <b>
          Good Question: Do the people who commemorate it know that the Battle
          for the Bay was an unfair fight?
        </b>
      </p>
      <p>
        This question does several things. Firstly, it introduces new
        information to the world and forces the drawer to incorporate it into
        their description. Secondly, it gives the drawer the chance to expand on
        the commemoration and be more specific on who celebrates this aspect of
        the world’s history. Finally, it suggests an ethical system - what does
        “fair” mean for people in this world? What about for the combatants?
        What kind of society glorifies an unfair fight?
      </p>
    </div>
  );
};
