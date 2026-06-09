const soloPhotos = ["images/solos/1.jpg", "images/solos/53334087292_f9def140c0_z.jpg", "images/solos/53514097314_fb3fc89c60_b.jpg", "images/solos/53548882647_b3017047f2_z.jpg", "images/solos/53640785747_6e4d5c16c1_b.jpg", "images/solos/53641623766_e385efd546_z.jpg", "images/solos/53642078365_96046eda67_z.jpg", "images/solos/53642080165_78af9a8903_z.jpg", "images/solos/53642123055_c63391226f_z.jpg", "images/solos/53642123990_40247a1f84_z.jpg", "images/solos/53678853232_1502bcd4de_z.jpg", "images/solos/53686031914_d5707b7555_b.jpg", "images/solos/53686031924_6f9d039a0b_z.jpg", "images/solos/53767667827_d7713cbabc_z.jpg", "images/solos/53767668027_3ce1372efd_z.jpg", "images/solos/53768997715_15c0d89d25_z.jpg", "images/solos/53768998480_a9af7df87c_z.jpg", "images/solos/53772152965_ed1edec87f_z.jpg", "images/solos/54035163742_ac15ddb2c0_z.jpg", "images/solos/54035176297_3057766cc0_z.jpg", "images/solos/54036038831_59511a5258_z.jpg", "images/solos/54036482415_d8ac597a7b_z.jpg", "images/solos/54036531820_4c3a8c2f6f_z.jpg", "images/solos/54934821568_ba536f25ab_h.jpg", "images/solos/54934863014_2ca85ade44_h.jpg", "images/solos/54934876188_135b42b0bb_h.jpg", "images/solos/55115645737_a83609d149.jpg", "images/solos/55115648202_78a86ca567_z.jpg", "images/solos/55116913855_8b45991a99_z.jpg"];
const groupPhotos = ["images/group pics/2 (group pics).jpg", "images/group pics/53334017877_49ec6b181a_z.jpg", "images/group pics/53334029797_525cae2416_z.jpg", "images/group pics/53334875046_d26beba651_z.jpg", "images/group pics/53334960806_f7e33a4d0e_z.jpg", "images/group pics/53335129928_2a23e2c090_z.jpg", "images/group pics/53335456485_f8d92cd369_z.jpg", "images/group pics/53512753649_5c145e2eca_z.jpg", "images/group pics/53512874360_9e686f19b2_z.jpg", "images/group pics/53513777376_c3abe35e10_z.jpg", "images/group pics/53548900462_fe30b13b2d_z.jpg", "images/group pics/53549004857_8950847749_z.jpg", "images/group pics/53549745166_b4c095bbc0_z.jpg", "images/group pics/53549747121_5c5d5953d8_z.jpg", "images/group pics/53549756236_2a90cb9fc7_z.jpg", "images/group pics/53550083764_88784ef1f9_z.jpg", "images/group pics/53550186800_95d2a29f5b_z.jpg", "images/group pics/53550290529_54a9ee40dd_z.jpg", "images/group pics/53642002664_a5a2f4d350_z.jpg", "images/group pics/53642123950_842ee4d873_z.jpg", "images/group pics/53680176665_6b3ff3ed9b_z.jpg", "images/group pics/53685667046_590a7be702_b.jpg", "images/group pics/53715733957_414a0d22f9_z.jpg", "images/group pics/53719794674_0da736b47c_b.jpg", "images/group pics/53719795284_8ded2cf619_z.jpg", "images/group pics/53719892025_333fbae472_z.jpg", "images/group pics/53719892080_3cfcec31d3_z.jpg", "images/group pics/53719892410_27ac86e733_z.jpg", "images/group pics/53767666792_20163bca09_z.jpg", "images/group pics/53768574841_a38d99987a_z.jpg", "images/group pics/53768905219_a554dba940_z.jpg", "images/group pics/53770820372_505a9e1a38_z.jpg", "images/group pics/53772031704_7ebf02419d_z.jpg", "images/group pics/53772061084_f5479445a7_z.jpg", "images/group pics/53772061604_054e82b3a4_z.jpg", "images/group pics/53772122740_e60b574811_z.jpg", "images/group pics/54035161617_2c78411d11_b.jpg", "images/group pics/54036278418_b76ee2def7_z.jpg", "images/group pics/54036294388_745a755d0a_z.jpg", "images/group pics/54036363614_2ef6752369_z.jpg", "images/group pics/54036481770_3291ffdb08_z.jpg", "images/group pics/54148164360_5079f9a824_z.jpg", "images/group pics/54503131197_d40f61f61d_h.jpg", "images/group pics/54503131427_876fbcd352_h.jpg", "images/group pics/54503132087_1a9bc0b6a4_h.jpg", "images/group pics/54503133092_1e3f38640a_h.jpg", "images/group pics/54503992096_855234283a_h.jpg", "images/group pics/54503992461_3a8cfa8b6f_h.jpg", "images/group pics/54504176799_68b9834fc7_h.jpg", "images/group pics/54504349740_868f807441_b.jpg", "images/group pics/54512587062_c0ff549187_h.jpg", "images/group pics/54513454191_69a7e3a2c6_h.jpg", "images/group pics/54513712928_7e364c2a80_h.jpg", "images/group pics/54513803375_afe4e72464_h.jpg", "images/group pics/54513804265_72ae07e5d9_h.jpg", "images/group pics/54537149674_956960b96c_h.jpg", "images/group pics/54537151079_338fded3d7_h.jpg", "images/group pics/54537306640_0cfad127d9_h.jpg", "images/group pics/54537307525_a61529d3eb_h.jpg", "images/group pics/54595804012_5933e97157_h.jpg", "images/group pics/54596886744_040bc1a2a9_h.jpg", "images/group pics/54596906478_1aa076ea43_h.jpg", "images/group pics/54596906953_f5699988b5_h.jpg", "images/group pics/54596999285_61554d96cd_h.jpg", "images/group pics/54828835804_e214844579_h.jpg", "images/group pics/54828921095_56d4b2cf59_h.jpg", "images/group pics/54934669751_ead78adf9e_h.jpg", "images/group pics/54934669776_670fed1753_h.jpg", "images/group pics/54934818513_7f9cc02ac6_h.jpg", "images/group pics/54934821538_ce0c4cdb81_h.jpg", "images/group pics/54934862824_c720f5e1ee_h.jpg", "images/group pics/54934862884_19cf3fcc57_h.jpg", "images/group pics/54934863004_36677e9721_h.jpg", "images/group pics/54934916849_fd041ccb81_h.jpg", "images/group pics/54934918264_06b8917e6a_h.jpg", "images/group pics/54934922035_e164b5ecc2_h.jpg", "images/group pics/54944671686_a640d0ee76_h.jpg", "images/group pics/54944875918_999028556d_h.jpg", "images/group pics/54944889508_ac3001cd10_h.jpg", "images/group pics/54944889653_496a77b3ac_h.jpg", "images/group pics/54944889738_85cf89eae8_h.jpg", "images/group pics/54944935949_d1efbd37c6_h.jpg", "images/group pics/54945007013_56cfb160b7_h.jpg", "images/group pics/54945007828_961b58326e_h.jpg", "images/group pics/54945064439_f174316684_h.jpg", "images/group pics/54945065834_9870cdab8b_h.jpg", "images/group pics/54945114930_2b74e85d81_h.jpg", "images/group pics/55077384708_3fa40f7918_z.jpg", "images/group pics/55116872426_bd040a2590_z.jpg", "images/group pics/55116913955_93b43a623d_z.jpg", "images/group pics/55116913980_7cbfcb2a60_z.jpg", "images/group pics/55116921020_4cd6591d70_h.jpg", "images/group pics/55116956940_d869a75a00_z.jpg", "images/group pics/55116971605_4634932066_z.jpg", "images/group pics/55117137924_3697b0c4cc_z.jpg", "images/group pics/55117138009_a5ab0503bd_z.jpg"];

const soloCaptions = [
  'Caught in 4K.',
  'Grandma behavior.',
  'Business major by day, chaos by night.',
  'This is the real Haley.',
  'Best grandma, questionable decisions.',
  'CSA grandma core.',
  'Disney adult energy detected.',
  'No birds were invited to this photo.'
];

const groupCaptions = [
  'CSA family tree memory unlocked.',
  'Kelly-approved grandma moment.',
  'Group photo, emotional damage edition.',
  'The lore continues.',
  'A very official CSA memory.',
  'Grandma and the family tree crew.',
  'Proof that first year had some really sweet moments.',
  'Memory saved successfully.'
];

const jokes = [
  'Emergency bird alert: Haley has left the chat.',
  'Hojicha boba is not a want. It is a lifestyle.',
  'Kelly picked me up, and somehow I gained the best grandma ever.',
  'Third-year business major graduating early? Overachiever behavior detected.',
  'Stitch would absolutely approve of this level of chaos.',
  'Panda mode: cute, calm, and secretly powerful.',
  'Badminton grandma is ready, but only if there are no birds nearby.',
  'CSA family tree said: surprise, you have a grandma now.'
];

let soloIndex = 0;
let groupIndex = 0;

function goToPage(pageNumber) {
  document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
  document.getElementById('page' + pageNumber).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showPopup(message) {
  document.getElementById('popupText').innerText = message;
  document.getElementById('popup').classList.remove('hidden');
}

function closePopup() { document.getElementById('popup').classList.add('hidden'); }

function showPhoto(src, caption) {
  document.getElementById('modalImg').src = src;
  document.getElementById('photoCaption').innerText = caption;
  document.getElementById('photoModal').classList.remove('hidden');
}

function closePhoto() { document.getElementById('photoModal').classList.add('hidden'); }

function updateGroupSlide() {
  const img = document.getElementById('groupSlide');
  if (!groupPhotos.length) return;
  img.src = groupPhotos[groupIndex];
  document.getElementById('groupCaption').innerText = groupCaptions[groupIndex % groupCaptions.length] + ` (${groupIndex + 1}/${groupPhotos.length})`;
}
function nextGroup() { groupIndex = (groupIndex + 1) % groupPhotos.length; updateGroupSlide(); }
function prevGroup() { groupIndex = (groupIndex - 1 + groupPhotos.length) % groupPhotos.length; updateGroupSlide(); }
function openCurrentGroup() { showPhoto(groupPhotos[groupIndex], document.getElementById('groupCaption').innerText); }

function updateSoloSlide() {
  const img = document.getElementById('soloSlide');
  if (!soloPhotos.length) return;
  img.src = soloPhotos[soloIndex];
  document.getElementById('soloCaption').innerText = soloCaptions[soloIndex % soloCaptions.length] + ` (${soloIndex + 1}/${soloPhotos.length})`;
}
function nextSolo() { soloIndex = (soloIndex + 1) % soloPhotos.length; updateSoloSlide(); }
function prevSolo() { soloIndex = (soloIndex - 1 + soloPhotos.length) % soloPhotos.length; updateSoloSlide(); }
function openCurrentSolo() { showPhoto(soloPhotos[soloIndex], document.getElementById('soloCaption').innerText); }
function showRandomSolo() {
  if (!soloPhotos.length) return showPopup('No solo photos found yet!');
  soloIndex = Math.floor(Math.random() * soloPhotos.length);
  updateSoloSlide();
  showPhoto(soloPhotos[soloIndex], soloCaptions[soloIndex % soloCaptions.length]);
}

function randomHaleyJoke() { return jokes[Math.floor(Math.random() * jokes.length)]; }
function removeBird() { document.getElementById('bird').classList.add('gone'); showPopup('The bird has been safely escorted away. Grandma Haley is protected.'); }
function confettiParty() {
  confetti({ particleCount: 160, spread: 90, origin: { y: 0.65 } });
  setTimeout(() => confetti({ particleCount: 100, spread: 120, origin: { y: 0.55 } }), 400);
}

document.addEventListener('DOMContentLoaded', () => { updateGroupSlide(); updateSoloSlide(); });
