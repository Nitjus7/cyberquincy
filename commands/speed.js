module.exports = {
	name: 'speed',
	aliases: ['s', 'rbs'],
	description: 'calculates the speed of bloons, even in freeplay',
	usage:'!speed <bloon/blimp> <round>',
	execute(message, args) {
		//rounds
		var b = args[0].toUpperCase();
		var round = args[1];
		var round1 = round-80;
		var round2 = round-100;
		var round3 = round-125;
		var round4 = round-152;
		if (b === 'MOAB'||b==='RED'){
			var bloon = 3;
		}else if (b === 'BFB'){
			var bloon = 1;
		}else if (b === 'ZOMG'||b==='BAD'){
			var bloon = 0.5;
		}else if (b === 'DDT'||b==='purple'){
			var bloon = 9;
		}else if (b.includes('CERAM')){
      var bloon = 8;
    }else if (b==='RAINBOW'){
      var bloon=7;
    }else if(b==='GREEN'||b==='ZEBRA'||b==='BLACK'){
      var bloon=5;
    }else if (b==='WHITE'){
      var bloon=6;
    }else if (b==='YELLOW'){
      var bloon=10;
    }else if (b==='PINK'){
      var bloon=11;
    }else if (b==='BLUE'){
      var bloon = 2
    }else{
      return message.channel.send('please specify a bloon, e.g. `\`\pink\`\`')
    }
		//multiplier
		var m1=0.02*round1;
		var m2=0.05*round2;
		var m3=0.2*round3;
		var m4=0.5*round4;
		//percentage increase
		if (round>80&&round<101){
			var pi=1+m1;         //80 to 100
		}else if (round>100&&round<125){		//100 to 125
			var pi=1+m2+0.4;
		}else if (round>124&&round<152){		//125 to 152
			var pi=1+m3+0.4+1.25;
		}else if (round>151){
			var pi=1+m4+0.4+1.25+5.4;
		}
		var bhealth = Math.floor(bloon*pi);
		if (round>80){
      var btype = b.toLowerCase();
			return message.channel.send(`${b} bloon/blimp has ${bhealth} RBS (red bloon seconds, 3RBS is a red bloon speed) at round ${round}`);

		}else if (round<1){
			return message.channel.send('quincy has no experience in these rounds');
		}else if (round>0&&round<81){
			return message.channel.send(`${btype} bloon/blimp has ${bloon} RBS (red bloon seconds, 3RBS is a red bloon speed) at round ${round}`);
		}else{
			if (args[0] === 'moab'||'MOAB'){
				return message.channel.send(`${bloon}`);
			}else if (args[0] === 'bfb'||'BFB'){
				return message.channel.send(`${bloon}`);
			}else if (args[0] === 'zomg'||'ZOMG'){
				return message.channel.send(`${bloon}`);
			}else if (args[0] === 'ddt'||'DDT'){
				return message.channel.send(`${bloon}`);
			}else if (args[0] === 'bad'||'BAD'){
				return message.channel.send(`${bloon}`);
			}
		}
		
	},
};
