import { gotScraping } from 'got-scraping';
import fs from 'fs';
import stream from 'stream';
import { promisify } from 'util';
import { convertToFileSyntax } from '../../src/Components/utils.js';

const pipeline = promisify(stream.pipeline);
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Ensure the directory exists so fs.writeFileSync doesn't fail
if (!fs.existsSync('./images')) {
    fs.mkdirSync('./images');
}

async function playersFromTeam(teamId) {
    // Corrected to .com domain
    const url = `https://api.sofascore.com/api/v1/team/${teamId}/players`;
    
    try {
        const res = await gotScraping.get(url, { responseType: 'json' });
        const players = res.body;
        if (!res.body || !res.body.players) {
            throw new Error(`Invalid response structure for Team ID: ${teamId}`);
        }
        
        return { players};
    } catch (err) {
        // If team isn't found or API is down, we log and return null
        console.error(`❌ Error fetching Team ${teamId}: ${err.message}`);
        return null; 
    }
}

const teamIds = [
  // 🇧🇷 Brazil
  1961, // Fluminense FC
  1977, // CA Mineiro
  1959, // Grêmio FBPA
  1963, // SE Palmeiras
  1958, // Botafogo FR
  1968, // Cruzeiro EC
  1981, // São Paulo FC
  1955, // EC Bahia
  1962, // SC Recife
  1983, // SC Corinthians Paulista
  1985, // CR Vasco da Gama
  1970, // EC Vitória
  5981, // CR Flamengo
  2001, // Ceará SC
  2020, // Fortaleza EC
  1989, // EC Juventude
  1999, // RB Bragantino
  2014, // Mirassol FC
  1966, // SC Internacional
  1967, // Santos FC

  // 🏴󠁧󠁢󠁥󠁮󠁧󠁿 England
  42,   // Arsenal FC
  40,   // Aston Villa FC
  38,   // Chelsea FC
  48,   // Everton FC
  43,   // Fulham FC
  44,   // Liverpool FC
  17,   // Manchester City FC
  35,   // Manchester United FC
  39,   // Newcastle United FC
  32,   // Sunderland AFC
  33,   // Tottenham Hotspur FC
  3,    // Wolverhampton Wanderers
  6,    // Burnley FC
  34,   // Leeds United FC
  14,   // Nottingham Forest FC
  7,    // Crystal Palace FC
  30,   // Brighton / Birmingham
  50,   // Brentford FC
  37,   // West Ham United FC
  60,   // AFC Bournemouth
  31,   // Leicester / Middlesbrough / Blackburn
  45,   // Southampton FC
  29,   // Derby County FC
  11,   // Sheffield Wednesday / Ipswich
  24,   // Watford FC
  46,   // Charlton Athletic FC
  15,   // Sheffield United FC
  26,   // Millwall FC
  18,   // Bristol City FC
  71,   // Wrexham AFC
  21,   // Coventry City FC
  16,   // Preston North End FC
  211,  // Oxford United FC
  254,  // Norwich City FC
  20,   // Queens Park Rangers FC
  28,   // Stoke City FC
  47,   // Swansea City AFC
  8,    // West Bromwich Albion FC
  36,   // Hull City AFC
  41,   // Portsmouth FC

  // 🌍 National Teams
  4711, // Germany
  4698, // Spain
  4704, // Portugal
  4695, // Slovakia
  4713, // England
  4481, // France
  4700, // Slovenia
  4702, // Serbia
  4476, // Denmark
  4705, // Italy
  4696, // Switzerland
  4484, // Ukraine
  4701, // Poland
  4475, // Czechia
  4697, // Croatia
  4706, // Turkey
  4715, // Belgium
  4708, // Romania
  4707, // Austria
  4699, // Hungary
  4694, // Albania
  4480, // Georgia
  4703, // Netherlands
  4693, // Scotland

  // 🇫🇷 France
  615,  // Toulouse FC
  616,  // Stade Brestois 29
  609,  // Olympique de Marseille
  607,  // AJ Auxerre
  608,  // Lille OSC
  613,  // OGC Nice
  610,  // Olympique Lyonnais
  583,  // Paris Saint-Germain FC
  614,  // FC Lorient
  611,  // Stade Rennais FC 1901
  618,  // Angers SCO
  637,  // Le Havre AC
  635,  // FC Nantes
  620,  // FC Metz
  636,  // Racing Club de Lens
  612,  // AS Monaco FC
  617,  // RC Strasbourg Alsace
  4643, // Paris FC

  // 🇩🇪 Germany
  2674, // 1. FC Köln
  2569, // TSG 1899 Hoffenheim
  2681, // Bayer 04 Leverkusen
  2673, // Borussia Dortmund
  2672, // FC Bayern München
  2683, // Hamburger SV
  2677, // VfB Stuttgart
  2684, // VfL Wolfsburg
  2685, // SV Werder Bremen
  2678, // 1. FSV Mainz 05
  2580, // FC Augsburg
  2534, // SC Freiburg
  2676, // Borussia Mönchengladbach
  2679, // Eintracht Frankfurt
  2527, // FC St. Pauli 1910
  2547, // 1. FC Union Berlin
  5839, // 1. FC Heidenheim 1846
  36394,// RB Leipzig

  // 🇮🇹 Italy
  2692, // AC Milan
  2693, // ACF Fiorentina
  2702, // AS Roma
  2686, // Atalanta BC
  2688, // Bologna FC 1909
  2714, // Cagliari Calcio
  2713, // Genoa CFC
  2697, // FC Internazionale Milano
  2687, // Juventus FC
  2699, // SS Lazio
  2690, // Parma Calcio 1913
  2716, // SSC Napoli
  2695, // Udinese Calcio
  2701, // Hellas Verona FC
  2700, // US Cremonese
  2793, // US Sassuolo Calcio
  2727, // AC Pisa 1909
  2703, // Torino FC
  2715, // US Lecce
  2704, // Como 1907

  // 🇵🇹 Portugal
  3002, // Rio Ave FC
  3001, // Sporting Clube de Portugal
  2990, // FC Porto
  3014, // GD Estoril Praia
  3004, // Moreirense FC
  4001, // FC Arouca
  5110, // CD Tondela
  2985, // Sport Lisboa e Benfica
  2993, // CD Nacional
  3009, // CD Santa Clara
  3012, // FC Famalicão
  2996, // Gil Vicente FC
  2994, // Vitória SC
  2999, // Sporting Clube de Braga
  3013, // Casa Pia AC
  3018, // FC Alverca
  3000, // CF Estrela da Amadora
  465431,// AVS

  // 🇪🇸 Spain
  2825, // Athletic Club
  2836, // Club Atlético de Madrid
  2818, // CA Osasuna
  2814, // RCD Espanyol de Barcelona
  2817, // FC Barcelona
  2832, // Getafe CF
  2829, // Real Madrid CF
  2834, // Rayo Vallecano de Madrid
  2849, // Levante UD
  2827, // RCD Mallorca
  2816, // Real Betis Balompié
  2824, // Real Sociedad de Fútbol
  2819, // Villarreal CF
  2822, // Valencia CF
  2821, // Deportivo Alavés
  2831, // Elche CF
  24235,// Girona FC
  2820, // RC Celta de Vigo
  2833, // Sevilla FC
  2830  // Real Oviedo
];


/*for (const team of teamIds) {
    console.log(`▶️ Processing Team ID: ${team}`);
    
    const players = await playersFromTeam(team);

    // This is the "Skip" logic
    if (!players) {
        console.log(`⏩ Skipping Team ID ${team} due to errors.`);
        continue; 
    }

    console.log(players[0].name);
    
    console.log(`🏁 Finished Team ID: ${team}`);
    await sleep(1000); // Sleep for 1 second between requests
}*/

console.log(`▶️ Processing Team ID: ${teamIds[0]}`);
    
const response = await playersFromTeam(teamIds[0]);

 // This is the "Skip" logic
if (!response) {
    console.log(`⏩ Skipping Team ID ${team} due to errors.`);
}

const players = response.players.players;

for (const player of players){
    console.log(player.player.country.name);
}
    
console.log(`🏁 Finished Team ID: ${teamIds[0]}`);

console.log("✅ All processes completed.");