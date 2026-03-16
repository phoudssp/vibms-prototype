// ============================================================
// VIBMS Mock Data - Shared across all prototypes
// ============================================================

// --- Exchange Rates ---
var EXCHANGE_RATES = { LAK_THB: 550, LAK_USD: 21500, THB_USD: 39 };

// --- BRT Stations (27 stations along 13.9km corridor) ---
var BRT_STATIONS = [
    {id:'S01',name:'ດົງໂດກ',nameEn:'Dongdok',lat:18.0155,lng:102.6350,zone:1},
    {id:'S02',name:'ມະຫາວິທະຍາໄລ',nameEn:'National University',lat:18.0105,lng:102.6345,zone:1},
    {id:'S03',name:'ກມ 6',nameEn:'Km 6 Market',lat:18.0040,lng:102.6338,zone:1},
    {id:'S04',name:'ໂພນພະເນົາ',nameEn:'Phonphanao',lat:17.9985,lng:102.6332,zone:1},
    {id:'S05',name:'ໜອງນິຄົມ',nameEn:'Nong Nikhom',lat:17.9945,lng:102.6325,zone:2},
    {id:'S06',name:'ແຍກ 400 ປີ',nameEn:'400 Year Junction',lat:17.9910,lng:102.6318,zone:2},
    {id:'S07',name:'ໂພນທັນ',nameEn:'Phonthan',lat:17.9880,lng:102.6308,zone:2},
    {id:'S08',name:'ທາດຫຼວງ',nameEn:'That Luang',lat:17.9855,lng:102.6335,zone:2},
    {id:'S09',name:'ໜອງບອນ',nameEn:'Nong Bon',lat:17.9830,lng:102.6350,zone:3},
    {id:'S10',name:'ສະໜາມກີລາ',nameEn:'National Stadium',lat:17.9800,lng:102.6335,zone:3},
    {id:'S11',name:'ປະຕູໄຊ',nameEn:'Patuxai',lat:17.9780,lng:102.6315,zone:3},
    {id:'S12',name:'ລ້ານຊ້າງ',nameEn:'Lane Xang Ave',lat:17.9760,lng:102.6298,zone:3},
    {id:'S13',name:'ໂພນໄຊ',nameEn:'Phon Xai',lat:17.9740,lng:102.6280,zone:3},
    {id:'S14',name:'ຕະຫຼາດເຊົ້າ',nameEn:'Talat Sao',lat:17.9660,lng:102.6145,zone:4},
    {id:'S15',name:'ໜອງຈັນ',nameEn:'Nong Chan',lat:17.9640,lng:102.6125,zone:4},
    {id:'S16',name:'ຈອມມະນີ',nameEn:'Chommany',lat:17.9620,lng:102.6105,zone:4},
    {id:'S17',name:'ດົງປ່າລານ',nameEn:'Dong Palane',lat:17.9600,lng:102.6085,zone:4},
    {id:'S18',name:'ໂພນສີນວນ',nameEn:'Phonsynuan',lat:17.9580,lng:102.6070,zone:5},
    {id:'S19',name:'ສີສັດຕະນາກ',nameEn:'Sisattanak',lat:17.9560,lng:102.6060,zone:5},
    {id:'S20',name:'ວັດຕາຍ',nameEn:'Wat Tai',lat:17.9545,lng:102.6050,zone:5},
    {id:'S21',name:'ໂພນເຄັງ',nameEn:'Phonkheng',lat:17.9530,lng:102.6038,zone:5},
    {id:'S22',name:'ສະພານທອງ',nameEn:'Saphan Thong',lat:17.9510,lng:102.6025,zone:6},
    {id:'S23',name:'ທົ່ງກາງ',nameEn:'Thong Kang',lat:17.9490,lng:102.6015,zone:6},
    {id:'S24',name:'ດອນໜູນ',nameEn:'Don Noun',lat:17.9470,lng:102.6005,zone:6},
    {id:'S25',name:'ໂນນສະຫວ່າງ',nameEn:'Non Sawang',lat:17.9450,lng:102.5995,zone:6},
    {id:'S26',name:'ທ່ານາແລ້ງ',nameEn:'Tha Na Laeng',lat:17.9390,lng:102.5960,zone:7},
    {id:'S27',name:'ຂົວມິດຕະພາບ',nameEn:'Friendship Bridge',lat:17.9230,lng:102.7130,zone:7}
];

// --- Green Bus Routes ---
var GREEN_ROUTES = [
    {id:'G01',name:'ສາຍ 1: ດົງໂດກ - ທ່າເດືອ',nameEn:'Line 1: Dongdok - Tha Deua',color:'#10b981',stops:6},
    {id:'G02',name:'ສາຍ 2: ຕະຫຼາດເຊົ້າ - ບ້ານເກົ່າ',nameEn:'Line 2: Talat Sao - Ban Kao',color:'#059669',stops:8},
    {id:'G03',name:'ສາຍ 3: ໂພນທັນ - ນາໄຮ',nameEn:'Line 3: Phonthan - Na Hai',color:'#047857',stops:5},
    {id:'G04',name:'ສາຍ 14: ຕະຫຼາດເຊົ້າ - ຂົວມິດຕະພາບ',nameEn:'Line 14: Talat Sao - Friendship Bridge',color:'#065f46',stops:10}
];

// --- Vehicles ---
var VEHICLES = [
    {id:'BRT-001',plate:'ກຂ 1001',type:'BRT',status:'active',driver:'ທ. ສົມພອນ',driverEn:'T. Somphon',lat:17.978,lng:102.631,speed:35,battery:78,passengers:28,routeProgress:0.4},
    {id:'BRT-002',plate:'ກຂ 1002',type:'BRT',status:'active',driver:'ນ. ວິໄລ',driverEn:'N. Vilai',lat:17.995,lng:102.633,speed:22,battery:65,passengers:35,routeProgress:0.2},
    {id:'BRT-003',plate:'ກຂ 1003',type:'BRT',status:'active',driver:'ສ. ບຸນມີ',driverEn:'S. Bounmy',lat:17.960,lng:102.610,speed:40,battery:82,passengers:18,routeProgress:0.7},
    {id:'BRT-004',plate:'ກຂ 1004',type:'BRT',status:'standby',driver:'ກ. ພູທອນ',driverEn:'K. Phouthone',lat:18.015,lng:102.635,speed:0,battery:95,passengers:0,routeProgress:0},
    {id:'BRT-005',plate:'ກຂ 1005',type:'BRT',status:'active',driver:'ວ. ແກ້ວ',driverEn:'V. Kaew',lat:17.949,lng:102.601,speed:30,battery:55,passengers:22,routeProgress:0.85},
    {id:'BRT-006',plate:'ກຂ 1006',type:'BRT',status:'maintenance',driver:'-',driverEn:'-',lat:18.015,lng:102.635,speed:0,battery:20,passengers:0,routeProgress:0},
    {id:'BRT-007',plate:'ກຂ 1007',type:'BRT',status:'active',driver:'ປ. ສີສະຫວາດ',driverEn:'P. Sisavath',lat:17.985,lng:102.633,speed:28,battery:71,passengers:31,routeProgress:0.35},
    {id:'BRT-008',plate:'ກຂ 1008',type:'BRT',status:'active',driver:'ທ. ພັນ',driverEn:'T. Phan',lat:17.970,lng:102.620,speed:18,battery:60,passengers:40,routeProgress:0.55},
    {id:'BRD-001',plate:'ກຄ 2001',type:'Border',status:'active',driver:'ຄ. ວົງສາ',driverEn:'K. Vongsa',lat:17.940,lng:102.680,speed:45,battery:null,passengers:35,routeProgress:0.6},
    {id:'BRD-002',plate:'ກຄ 2002',type:'Border',status:'active',driver:'ບ. ສີລິ',driverEn:'B. Siri',lat:17.955,lng:102.650,speed:38,battery:null,passengers:28,routeProgress:0.3},
    {id:'BRD-003',plate:'ກຄ 2003',type:'Border',status:'standby',driver:'ດ. ວິລະ',driverEn:'D. Vila',lat:17.963,lng:102.614,speed:0,battery:null,passengers:0,routeProgress:0},
    {id:'GRN-001',plate:'ກງ 3001',type:'Green',status:'active',driver:'ສ. ວັນນະ',driverEn:'S. Vanna',lat:17.992,lng:102.650,speed:32,battery:null,passengers:15,routeProgress:0.45},
    {id:'GRN-002',plate:'ກງ 3002',type:'Green',status:'active',driver:'ນ. ພອນ',driverEn:'N. Phon',lat:17.975,lng:102.590,speed:25,battery:null,passengers:20,routeProgress:0.6},
    {id:'GRN-003',plate:'ກງ 3003',type:'Green',status:'active',driver:'ກ. ແສງ',driverEn:'K. Saeng',lat:17.955,lng:102.640,speed:28,battery:null,passengers:12,routeProgress:0.25},
    {id:'GRN-004',plate:'ກງ 3004',type:'Green',status:'maintenance',driver:'-',driverEn:'-',lat:17.963,lng:102.614,speed:0,battery:null,passengers:0,routeProgress:0}
];

// --- Staff / Users ---
var STAFF = [
    {id:'U01',name:'ທ. ສົມພອນ ແກ້ວມະນີ',nameEn:'T. Somphon Keomanee',role:'Super Admin',roleColor:'#dc2626'},
    {id:'U02',name:'ນ. ວິໄລ ພົມມະວົງ',nameEn:'N. Vilai Phommavong',role:'Operations Manager',roleColor:'#dc2626'},
    {id:'U03',name:'ສ. ບຸນມີ ສີສະຫວາດ',nameEn:'S. Bounmy Sisavath',role:'Ticket Counter',roleColor:'#d97706'},
    {id:'U04',name:'ກ. ພູທອນ ວົງສາ',nameEn:'K. Phouthone Vongsa',role:'Gate Validator',roleColor:'#d97706'},
    {id:'U05',name:'ວ. ແກ້ວ ໄຊຍະວົງ',nameEn:'V. Kaew Xaiyavong',role:'Border Agent',roleColor:'#d97706'},
    {id:'U06',name:'ປ. ສີສະຫວາດ',nameEn:'P. Sisavath',role:'Bus Driver',roleColor:'#059669'},
    {id:'U07',name:'ດ. ວິລະພອນ',nameEn:'D. Vilaphon',role:'Finance Officer',roleColor:'#059669'},
    {id:'U08',name:'ຄ. ວົງພະຈັນ',nameEn:'K. Vongphachan',role:'Fleet Manager',roleColor:'#059669'},
    {id:'U09',name:'ບ. ສີລິວົງ',nameEn:'B. Silivong',role:'Auditor',roleColor:'#7c3aed'}
];

// --- Border Passengers ---
var BORDER_PASSENGERS = [
    {id:'BP01',name:'John Smith',nationality:'USA',passport:'US9284710',visa:'Tourist 30d',gender:'M',photo:null},
    {id:'BP02',name:'Yuki Tanaka',nationality:'Japan',passport:'JP3847291',visa:'Tourist 15d',gender:'F',photo:null},
    {id:'BP03',name:'สมชาย แก้วกล้า',nationality:'Thailand',passport:'TH5829374',visa:'Border Pass',gender:'M',photo:null},
    {id:'BP04',name:'王小明',nationality:'China',passport:'CN2948571',visa:'Tourist 30d',gender:'M',photo:null},
    {id:'BP05',name:'Kim Min-jun',nationality:'South Korea',passport:'KR8274615',visa:'Tourist 15d',gender:'M',photo:null},
    {id:'BP06',name:'Marie Dupont',nationality:'France',passport:'FR4928371',visa:'Tourist 30d',gender:'F',photo:null},
    {id:'BP07',name:'สุภาพร ใจดี',nationality:'Thailand',passport:'TH9182736',visa:'Border Pass',gender:'F',photo:null},
    {id:'BP08',name:'ທ. ສົມພອນ',nationality:'Laos',passport:'LA1029384',visa:'Citizen',gender:'M',photo:null}
];

// --- Recent Tickets ---
var RECENT_TICKETS = [
    {id:'TK-20260316-001',route:'BRT',from:'Dongdok',to:'Talat Sao',fare:6000,currency:'LAK',method:'E-Wallet',time:'08:15',status:'used',passenger:'ນ. ແກ້ວ'},
    {id:'TK-20260316-002',route:'BRT',from:'Patuxai',to:'Phonphanao',fare:4000,currency:'LAK',method:'QR Pay',time:'08:32',status:'active',passenger:'ສ. ພອນ'},
    {id:'TK-20260316-003',route:'Border',from:'Talat Sao',to:'Bridge',fare:30000,currency:'LAK',method:'Cash',time:'08:45',status:'used',passenger:'John Smith'},
    {id:'TK-20260316-004',route:'Border',from:'Talat Sao',to:'Bridge',fare:30,currency:'THB',method:'Cash',time:'08:47',status:'active',passenger:'สมชาย แก้วกล้า'},
    {id:'TK-20260316-005',route:'Green',from:'Phonthan',to:'Na Hai',fare:8000,currency:'LAK',method:'E-Wallet',time:'09:01',status:'used',passenger:'ກ. ວິໄລ'},
    {id:'TK-20260316-006',route:'BRT',from:'National Stadium',to:'Wat Tai',fare:5000,currency:'LAK',method:'QR Pay',time:'09:15',status:'active',passenger:'ບ. ສີລິ'},
    {id:'TK-20260316-007',route:'Border',from:'Talat Sao',to:'Bridge',fare:1,currency:'USD',method:'Cash',time:'09:22',status:'active',passenger:'Marie Dupont'},
    {id:'TK-20260316-008',route:'BRT',from:'That Luang',to:'Talat Sao',fare:4000,currency:'LAK',method:'E-Wallet',time:'09:35',status:'used',passenger:'ດ. ວິລະ'}
];

// --- Revenue Data (last 7 days) ---
var REVENUE_DAILY = [
    {date:'10 Mar',brt:18500000,border:12800000,green:6200000},
    {date:'11 Mar',brt:19200000,border:11500000,green:5800000},
    {date:'12 Mar',brt:17800000,border:13200000,green:6500000},
    {date:'13 Mar',brt:20100000,border:14100000,green:7100000},
    {date:'14 Mar',brt:21500000,border:12600000,green:6800000},
    {date:'15 Mar',brt:16200000,border:15800000,green:5500000},
    {date:'16 Mar',brt:19800000,border:13500000,green:6900000}
];

var REVENUE_BY_METHOD = {cash:35,qrPay:28,eWallet:25,card:12};

// --- KPI Data ---
var KPI = {
    todayRevenue: 40200000,
    activeVehicles: 11,
    totalVehicles: 15,
    todayPassengers: 4285,
    onTimeRate: 87.3,
    avgWaitTime: '4.2 min',
    fleetAvailability: 86.7,
    fareboxRecovery: 72.5
};

// --- Ridership (last 7 days) ---
var RIDERSHIP_DAILY = [
    {date:'10 Mar',brt:3200,border:420,green:680},
    {date:'11 Mar',brt:3450,border:380,green:650},
    {date:'12 Mar',brt:3100,border:450,green:710},
    {date:'13 Mar',brt:3680,border:410,green:740},
    {date:'14 Mar',brt:3900,border:395,green:690},
    {date:'15 Mar',brt:2800,border:520,green:580},
    {date:'16 Mar',brt:3550,border:435,green:720}
];

// --- Fares ---
var FARES = {
    brt: [{zones:1,fare:4000},{zones:2,fare:5000},{zones:3,fare:6000},{zones:4,fare:7000}],
    border: {LAK:30000,THB:30,USD:1.5},
    green: [{distance:'short',fare:5000},{distance:'medium',fare:8000},{distance:'long',fare:12000}]
};

// --- Alerts ---
var ALERTS = [
    {id:1,type:'warning',msg:'BRT-006 maintenance overdue by 2 days',time:'10 min ago',icon:'🔧'},
    {id:2,type:'info',msg:'Border bus departure 09:30 - 35/40 seats filled',time:'25 min ago',icon:'🚌'},
    {id:3,type:'success',msg:'Daily revenue target reached (40M LAK)',time:'1 hr ago',icon:'📊'},
    {id:4,type:'warning',msg:'GRN-004 offline - last seen at Ban Kao',time:'2 hr ago',icon:'📡'},
    {id:5,type:'info',msg:'New driver ປ. ຄຳແພງ assigned to BRT-004',time:'3 hr ago',icon:'👤'}
];

// --- i18n (English / Lao) ---
var i18n = {
    en: {
        dashboard:'Dashboard',liveMap:'Live Map',fleet:'Fleet',revenue:'Revenue',users:'Users',
        totalRevenue:'Total Revenue',activeVehicles:'Active Vehicles',passengers:'Passengers Today',
        onTime:'On-Time Rate',search:'Search...',notifications:'Notifications',
        home:'Home',routes:'Routes',tickets:'Tickets',wallet:'Wallet',profile:'Profile',
        scanTicket:'Scan QR Ticket',validate:'Validate',approved:'Approved',rejected:'Rejected',
        balance:'Balance',topUp:'Top Up',history:'History',bookTicket:'Book Ticket',
        selectRoute:'Select Route',from:'From',to:'To',fare:'Fare',pay:'Pay Now',
        language:'Language',settings:'Settings',logout:'Logout',
        brt:'BRT',borderBus:'Border Bus',greenBus:'Green Bus',
        issueTicket:'Issue Ticket',scanPassport:'Scan Passport',printTicket:'Print Ticket',
        todayTransactions:'Today\'s Transactions',shiftSummary:'Shift Summary'
    },
    lo: {
        dashboard:'ແຜງຄວບຄຸມ',liveMap:'ແຜນທີ່ສົດ',fleet:'ຝູງລົດ',revenue:'ລາຍຮັບ',users:'ຜູ້ໃຊ້',
        totalRevenue:'ລາຍຮັບທັງໝົດ',activeVehicles:'ລົດທີ່ແລ່ນຢູ່',passengers:'ຜູ້ໂດຍສານມື້ນີ້',
        onTime:'ອັດຕາກົງເວລາ',search:'ຄົ້ນຫາ...',notifications:'ການແຈ້ງເຕືອນ',
        home:'ໜ້າຫຼັກ',routes:'ເສັ້ນທາງ',tickets:'ປີ້',wallet:'ກະເປົາ',profile:'ໂປຣໄຟລ໌',
        scanTicket:'ສະແກນປີ້ QR',validate:'ກວດສອບ',approved:'ຜ່ານແລ້ວ',rejected:'ບໍ່ຜ່ານ',
        balance:'ຍອດເງິນ',topUp:'ເຕີມເງິນ',history:'ປະຫວັດ',bookTicket:'ຈອງປີ້',
        selectRoute:'ເລືອກເສັ້ນທາງ',from:'ຈາກ',to:'ໄປ',fare:'ຄ່າໂດຍສານ',pay:'ຈ່າຍເງິນ',
        language:'ພາສາ',settings:'ຕັ້ງຄ່າ',logout:'ອອກຈາກລະບົບ',
        brt:'BRT',borderBus:'ລົດເມຊາຍແດນ',greenBus:'ລົດເມຂຽວ',
        issueTicket:'ອອກປີ້',scanPassport:'ສະແກນໜັງສືຜ່ານແດນ',printTicket:'ພິມປີ້',
        todayTransactions:'ທຸລະກຳມື້ນີ້',shiftSummary:'ສະຫຼຸບກະ'
    }
};

// --- Utility functions ---
function formatLAK(n){return new Intl.NumberFormat('en').format(n)+' ₭';}
function formatNumber(n){return new Intl.NumberFormat('en').format(n);}
function randomBetween(a,b){return Math.floor(Math.random()*(b-a+1))+a;}
function generateTicketId(){return 'TK-'+Date.now().toString(36).toUpperCase()+'-'+randomBetween(100,999);}
function getServiceColor(type){return type==='BRT'?'#ef4444':type==='Border'?'#3b82f6':'#10b981';}
function getStatusColor(s){return s==='active'?'#10b981':s==='standby'?'#f59e0b':'#ef4444';}
