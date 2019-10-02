/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {
      let weeks;
      let numberHoursKnowsProgramming = 800;
      let numberHoursNotKnowsProgramming = numberHoursKnowsProgramming + 500;
      
      if (knowsProgramming) {
        weeks = Math.ceil(numberHoursKnowsProgramming / config[focus]);
      } else {
        weeks = Math.ceil(numberHoursNotKnowsProgramming / config[focus]);
      }
      

      return weeks;
      
  };
  