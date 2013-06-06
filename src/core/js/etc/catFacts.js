var CatFacts = function() {};
(function(){

var lastCatFact
var interestingFacts = [
'Cats and humans have identical regions in the brain responsible for emotion.',
'A cat\'s brain is more similar to a human brain than that of a dog.',
'Cats can rotate each ear independently from the other in 180 degrees.',
'Cat hearing stops at 65kHz; human hearing stops at 20kHz.',
'Cats see about 6 times better than humans at night.',
'Cats can judge within 3 inches the precise location of a sound being made 1 yard away.',
'Cats can be right-pawed or left-pawed.',
'Cats cannot see directly under their nose.',
'Cats express their present state of mind through their tail.',
'Cats are the only animals that walk on their toes.',
'Cats were worshipped as holy in Ancient Egypt and granted great respect in every household.',
'Phoenician ships likely brought the first domesticated cats to Europe in about 900 BC.',
'Ancient Egyptians shaved their eyebrows in mourning when the family cat died.',
'In Siam, a cat rode in a chariot at the head of a parade celebrating the new king.',
'Most cats adore sardines.',
'Cats use their whiskers to measure distances and changes in air pressure.',
'Cat whiskers are very sensitive to touch.',
'Abraham Lincoln kept four cats at the White House during his presidency.',
'Cats purr at the same frequency as an idling diesel engine.',
'Nikola Tesla was inspired to study electricity after his cat static-shocked him in his youth.',
'Isaac Newton invented the cat-flap.',
'Cats use their tails for balance and have nearly 30 individual bones in them.',
'Even though Napoleon was known as a ruthless conqueror, he was always very afraid of cats.',
'A kitten\'s eyes are always blue at first.',
'A cat can jump as high as seven times as it is tall.',
'Kittens begin dreaming at just over one week old.',
'Every cat\'s nose is unique, and no two nose-prints are the same.',
'The Pilgrims were the first to introduce cats to North America.',
'Cats purr to communicate.',
'A group of kittens is called a kindle.',
'The British Government owns thousands of cats, deployed in government buildings to get rid of mice.',
'Cats are more active during the evening hours.',
'Cats have a field of vision of about 185 degrees.',
'Cats have the AB blood type, which is also found in humans.',
'Cats have a homing ability that uses their biological clock, the sun\'s angle and the Earth\'s magnetic field.',
'A cat taken far from its home can return to it thanks to remarkable homing instincts.',
'Cats successfully catch mice in about one out of three attempts.',
'Female cats tend to be right pawed, while male cats are more often left pawed.',
'The first cat in space was a French cat named Felicette, sent in 1963. She survived the trip.',
'A cat can travel at a top speed of approximately 31 mph (49 km/h) over a short distance.',
'Ancient Egyptians worshipped the goddess Bast, who had a woman\'s body and a cat\'s head.',
'Cats almost never meow at each other, and mostly do so only to communicate with humans.',
'Approximately one third of cat owners think their pets are able to read their minds.',
'In Japan, cats are thought to have the power to turn into powerful spirits when they die.',
'According to Buddhist legend, the body of the cat is the temporary resting place of spiritual people.',
'A cat\'s heart beats nearly twice as fast as a human heart.',
'Cats sweat only through their paws.',
'When cats are happy or pleased, they momentarily squeeze their eyes shut.',
'Cryptocat\'s lead developer lives with a cat named Sprite. She is super cute and awesome!',
'Cats can make over one hundred different vocalizations.',
'Cats purr at a frequency that promotes bone density and helps with bone healing.',
'On average, cats spend two-thirds of every day sleeping.',
'Unlike dogs, cats do not have a sweet tooth. Scientists believe this is due to a mutation in a key taste receptor.',
'When a cat chases its prey, it keeps its head level. Dogs and humans bob their heads up and down.',
'The technical term for a cat\'s hairball is a bezoar.',
'A group of cats is called a clowder.',
'Female cats tend to be right pawed, while male cats are more often left pawed.',
'A cat cannot climb head first down a tree because its claws are curved the wrong way.',
'Cats make about 100 different sounds. Dogs make only about 10.',
'There are more than 500 million domestic cats in the world, with approximately 40 recognized breeds.',
'The oldest known pet cat was recently found in a 9,500-year-old grave on the Mediterranean island of Cyprus.',
'Over 30% of households in North America own a cat.',
'According to Hebrew legend, cats are the result of a Lion\'s sneeze.',
'A cat can travel at a top speed of approximately 31 mph (49 km) over a short distance.',
'Some cats have survived falls of over 65 feet (20 meters), due largely to their righting reflex.',
'A cat rubs against people to mark them as their territory.',
'To this day, scientists do not know how cats purr.',
'The biggest wildcat today is the Siberian Tiger.',
'The smallest wildcat today is the Black-footed cat.',
'Many Egyptians worshipped the goddess Bast, who had a woman\'s body and a cat\'s head.',
'The most popular pedigreed cat is the Persian cat, followed by the Maine Coon cat and the Siamese cat.',
'Some Siamese cats are cross-eyed to compensate for abnormal optic wiring.',
'Researchers believe the word tabby comes from Attabiyah, a neighborhood in Baghdad, Iraq.',
'Tabbies got their name because their coats resembled the wavy patterns in the silk produced in Attabiyah in Iraq.',
'Cats don\'t like water because their fur does not insulate well when it\'s wet.',
'The Egyptian Mau is the oldest breed of cat. The breed is so ancient that its name is the Egyptian word for cat.',
'A cat usually has about 12 whiskers on each side of its face.',
'Scientists believe grass appears red to cats.',
'In the original Italian version of Cinderella, the benevolent fairy godmother figure was a cat.',
'The ability of a cat to find its way home is called psi-traveling.',
'In Japan, cats are thought to have the power to turn into super spirits when they die.',
'Most cats had short hair until about 100 years ago, until the intervention of cat breeding.',
'During the nearly 18 hours a day that kittens sleep, an important growth hormone is released. ',
'One reason that kittens sleep so much is because a growth hormone is released only during sleep.',
'Cats have about 130,000 hairs per square inch.',
'A cat typically can live up to 20 years, which is equivalent to about 96 human years.',
'A commemorative tower was built in Scotland for a cat named Towser, who caught nearly 30,000 mice in her lifetime.',
'In the 1750s, Europeans introduced cats into the Americas to control pests.',
'The first cat show was organized in 1871 in London. Cat shows later became a worldwide craze.',
'The first cartoon cat was Felix the Cat in 1919.',
'A cat\'s nose pad is ridged with a unique pattern, just like the fingerprint  of a human.',
'A 2007 Gallup poll revealed that both men and women were equally likely to own a cat.'
]

CatFacts.getFact = function() {
	catFact = Math.floor(Cryptocat.random() * interestingFacts.length)
	while (lastCatFact === catFact) {
		catFact = Math.floor(Cryptocat.random() * interestingFacts.length)
	}
	lastCatFact = catFact
	return interestingFacts[catFact]
}

})()