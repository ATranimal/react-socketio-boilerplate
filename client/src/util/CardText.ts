import { CardType } from "../models/CardType";

const cardText = [
  "Describe an argument you’ve had with someone older than you - a parent, grandparent, older relative or friend. What would this argument look like on the scale of your world? Who are the two sides? Who is in power? Whose position is the most popular? How did this argument begin? Has it been resolved? If so, how? If not, why not?",
  "Describe a fear or anxiety you have. What would this fear look like on the scale of your world? What is the threat? Is it real, imagined, exaggerated, ignored? Who is threatened? Who is safe? Has your world overcome its fear? If so, how? If not, why not?",
  "Describe a hope or dream you have. What would this hope look like on the scale of your world? Who is able to achieve this dream, and who is barred from it? What happens to those who achieve the dream? What happens to those who fail? Has your world lost faith in this dream? If so, what caused this? If not, why not?",
  "Describe an important lesson you recently learned. What would this lesson look like on the scale of your world? What was your world like before the lesson was learned? How was it learned, and when? What (or who) was sacrificed for it? Has it been forgotten? If so, how? If not, how is it kept in the memories of your world’s inhabitants?",
  "Describe one way you have changed in the last five years. What would this change look like on the scale of your world? What was your world like before the change? What caused it to change? What was lost in the change? Are things better, worse or something else now?",
  "Describe one personality trait you like about yourself. In your world, this trait is EITHER an ideal people aspire to OR mocked and detested (you pick). How did it become this way? Who in your world has this trait? What role do they play in the world? What happens to those who don’t have this trait?",
  "Describe something that made you angry recently. What would this anger and its target look like on the scale of your world? Who or what in your world is angry or unsettled? Who or what is the target? What effects does each side experience due to this animosity? How did it begin? Has it ended? If so, how did it end? If not, why does it endure?",
  "Describe something you wish you had the time to do more often. In your world, this activity is EITHER necessary OR disallowed (you pick). In what way is it necessary/disallowed - physically, legally, socially, or another way? Who opposes or breaks this rule and why? How did it become this way?",
  "Describe a rebellion in your world’s history. Who were the rebels and what were they fighting for? How did the rebellion end? How is the rebellion remembered (if it is remembered at all)?",
  "Describe a period of relative peace in your world’s history. At what cost was this peace achieved? How long did it last? How did it end?",
  "Describe an encounter between two groups in your world’s history that has been misremembered. Who were the groups? What do people believe happened, and what actually happened?",
  "Describe a tumultuous year in your world’s history. What happened that caused such unrest? How was your world different by the end of the year? How is the year remembered now?",
  "Describe a time when your world was nearly destroyed or irreparably damaged. What caused the cataclysm? How was it averted? How was it changed by this near-miss?",
  "Describe a time when a power vacuum opened up in your world’s power structure. How did the vacuum open up? How long was it open? How was it eventually closed, and at what cost?",
  "Describe a battle or argument that changed the course of your world’s history. Who were the combatants? Who won (if anyone) and who lost (if anyone)? What changed?",
  "Describe a time in your world’s history when war was narrowly averted. Why did the war nearly happen? How was it averted, and at what cost?",
  "Describe a natural disaster that changed the course of your world’s history. What damage did the disaster cause, and to whom? What changed?",
  "Describe how your world’s current political power structure came to be. What was it like before? Why did that change?",
  "Describe how your world’s current economic structure came to be. What was it like before? How did that change?",
  "Describe a scientific discovery that changed your world’s history. What forces (political, economic, or personal) were behind the discovery? What changed? At what cost?",
  "Describe a cultural event that changed your world’s history. What forces (political, economic, or personal) were behind the event? What was its intended impact and what was its actual impact?",
  "Describe an irreparable loss that your world experienced. What was lost and why? Why does it matter?",
  "Describe a moment in your world’s history that is looked back to for hope and inspiration. Who looks back to it? Is this reputation deserved?",
  "Describe something in your world that has been lost and is now missed. Why was it lost? Who misses it? Does it still exist somewhere? Could it ever be found? Should it?",
  "Describe a place in your world that is difficult to get to. Where is it?  What makes it so hard to get to? Who has been there, and what have they gained/lost for having gone? Has it always been difficult to get to?",
  "Describe something - a place, object or idea - in your world that was recently discovered. Why was it hidden before? How was it found? What has changed in your world since its discovery?",
  "Describe a dangerous place in your world. Who or what makes it so? Has it always been this dangerous? For whom or what is it the most dangerous? What happens to those who brave it despite its dangers?",
  "Describe something - a place, object or idea - that is popular in your world. Who or what popularized it? Why is it popular? Does it deserve the hype? Who dislikes it despite (or because of) its popularity?",
  "Describe a resource in your world that is scarce. What caused the scarcity? How long has it been this rare? What consequences has your world suffered from lacking this resource",
  "Describe a resource in your world that is in abundance. What caused the abundance? How long has it been this common? What consequences has your world suffered from gaining this resource?",
  "Describe the oldest building in your world. How old is it? Who built it? Who do people nowadays think built it? How has it changed since it was built? What was its original purpose? What is its current purpose?",
  "Describe a place in your world that was destroyed. When was it destroyed, how, and why? What stands now in its place?",
  "Describe an object in your world that is misunderstood. What is its true purpose? What do people mistake it for? Who or what caused the misunderstanding?",
  "Describe an object in your world that is revered. Who reveres it and why? Who is suspicious of it, unsettled by it or disturbed by it, and why do they feel that way?",
  "Describe a typical domicile (a place where someone lives) in your world. How is the space divided up? How many people live in it, and how do they know each other? What does “typical” mean here (ie. how much of the population gets to live like this? Who is unable like this and why? Who is privileged enough that they don’t have to live like this? etc.)?",
  "Describe an object or tool in your world that is widely considered necessary. How did it become so ubiquitous? Who is denied access to it? What would happen if it suddenly disappeared from your world?",
  "Describe an object in your world that it is controversial to own. How did it become controversial and why is it controversial? Who owns it? Who would (or could) never own it?",
  "Describe a place in your world that is considered sacred or magical, or is otherwise revered. What gave it this reputation? Who is allowed to visit it and who is barred from it? Where is it in relation to the rest of your world - is it isolated, easy to get to, or otherwise?",
  "Describe someone in your world who was the only witness to something important. What did they see? How did it change them? Who (if anyone) did they tell about what they saw?",
  "Describe someone in your world who made a great sacrifice. What did they sacrifice for? What did their sacrifice mean? Was their sacrifice remembered? How did the sacrifice change them?",
  "Describe someone in your world who accidentally changed history. What did they intend to do, and what did they end up doing? What change did they cause? Who (if anyone) knows that it was an accident? How did they feel afterwards?",
  "Describe someone in your world who discovered something terrible. What did they discover and when? What changed after the discovery? How did they feel about it afterwards? How are they remembered in history given their discovery?",
  "Describe someone in your world who fought for something they believed in. What was their fight and how did it change them? What was their belief and how was it challenged?",
  "Describe someone in your world who inspired an ideal. What was the ideal? Did they live up to what they inspired? How has the ideal changed since they came to inspire it?",
  "Describe someone in your world who overreached and failed. What were they trying to do? Why did they fail? What were the consequences of their attempt and of their failure?",
  "Describe a non-human living creature in your world (either an individual or a species). How did they come to be? Why are they the way they are?",
  "Describe an infamous criminal in your world. What crimes were they accused of? Were they guilty? Were they caught? If so, how? If not, why not? Were they ever brought to justice? If so, how? If not, why not?",
  "Describe someone in your world who was politically powerful. How did they come to power? How much power did they have at the height of their power? How did they lose power?",
  "Describe someone in your world who was influential but forgotten by history. What did they accomplish? Why were they forgotten? Who remembers them still?",
  "Describe someone who is undeservingly remembered by your world. What are they remembered for? Why don’t they deserve it? Who did the work to make sure they are remembered?",
  "Describe someone who created a work of art that changed your world. What was their medium? How did it change things? What was their inspiration?",
  "Describe someone who led a group of people to a terrible fate. What happened to the people? What were the leader’s intentions? How did this affect the rest of the world?",
  "Describe someone in your world who is profoundly privileged. What privileges do they have? Have they always had them? If not, how did they gain them? What do they do with their privilege?"
];

export const getCardTextFromID = (id: number): string => {
  return cardText[id];
};

export const getCardTypeFromID = (id: number): CardType => {
  if (id >= 0 && id <= 7) {
    return CardType.Theme;
  } else if (id >= 8 && id <= 22) {
    return CardType.Event;
  } else if (id >= 23 && id <= 37) {
    return CardType.Thing;
  } else if (id >= 38 && id <= 52) {
    return CardType.Inhabitant;
  }

  return CardType.Theme;
};

export const getStringFromCardType = (cardType: CardType) => {
  switch (cardType) {
    case CardType.Theme:
      return "Theme";
    case CardType.Event:
      return "Event";
    case CardType.Thing:
      return "Thing";
    case CardType.Inhabitant:
      return "Inhabitant";
    default:
      break;
  }
};

export const getColourFromId = (id: number): string => {
  const cardType = getCardTypeFromID(id);

  return getColourFromCardType(cardType);
};

export const getColourFromCardType = (cardType: CardType): string => {
  let colour = "";
  switch (cardType) {
    case CardType.Theme:
      colour = "#9ec5de";
      break;
    case CardType.Event:
      colour = "#c8e6cd";
      break;
    case CardType.Thing:
      colour = "#f7f1bf";
      break;
    case CardType.Inhabitant:
      colour = "#f2acac";
      break;
    default:
      break;
  }

  return colour;
};
