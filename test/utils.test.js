// IMPORT MODULES under test here:
import { renderMonster } from '../utils.js';

const test = QUnit.test;

test('time to test renderMonster function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="monster"><img src="assets/icons8-cute-monster-96.png"><h4>Rosie 1 HP</h4></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderMonster({
        id: 1,
        name: 'Rosie',
        hp: 1,
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
