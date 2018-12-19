//% block="Random Blocks"
//% icon="\uf1b2"
//% color="#7abb55"
namespace randomBlocks {
	//% block="get random wool block"
	export function getRandomWoolBlock(): number {
		switch (Math.randomRange(0, 15)) {
			case 0:
				return 35;
			case 1:
				return 65571;
			case 2:
				return 131107;
			case 3:
				return 196643;
			case 4:
				return 262179;
			case 5:
				return 327715;
			case 6:
				return 393251;
			case 7:
				return 458787;
			case 8:
				return 524323;
			case 9:
				return 589859;
			case 10:
				return 655395;
			case 11:
				return 720931;
			case 12:
				return 786467;
			case 13:
				return 852003;
			case 14:
				return 917539;
			case 15:
				return 983075;
			default: // This shouldn't happen, but TypeScript cries without the default case.
				return 35;
		}
	}
}