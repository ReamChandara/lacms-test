'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "69e4b35da83debe94874645218aaea89",
"version.json": "c693ba222d2f180b4ba3ed05ca62f66e",
"index.html": "d530239188d3ce2df033be4aaca72626",
"/": "d530239188d3ce2df033be4aaca72626",
"main.dart.js": "f731252edc6506d154ad57e9d30e51e4",
"flutter.js": "2a09505589bbbd07ac54b434883c2f03",
"favicon.png": "7d7284ae8ba5b4d5c3c56eb3b90953fc",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "7ab265016537c900ffb9c7d85786fd6e",
".git/config": "e708abbcb6541dfed0fd8079426cfcda",
".git/objects/61/f99332d4250353bde6d57e6840c6c46d5cc3f2": "20cefc2de091f3b158a3ee199cf1c907",
".git/objects/0c/44646d7b7976185d6e9959737a90f4f64cc732": "e442394d84a1c0fa2575dce51c782ea2",
".git/objects/66/2c9104a3046a4b392eaab702add2ae67915a62": "4935f1d1234c81b7dae5bec469c9fba3",
".git/objects/3b/f4bd83b4d4108e7306257c30d19f04711fd5c7": "3aa798ba95c3a0f54b12927ff930f346",
".git/objects/3b/c29dca4ae1378db97b4284cdcef38b0a5210b1": "22c75d182964a4abc62159261d846cb1",
".git/objects/03/7ea992c77f10e404f7f22514349f8f3a93e56a": "5712556537fa74a2d4b78f31a46f7546",
".git/objects/9e/6aa0ddfa5d086d25eef4759a5cbf0371830947": "439de09f9cd06a4c5456e725b4756fd2",
".git/objects/35/caaf4ab3373b8a3798b2656ec4cd6c8c4b3797": "c0deac47e985be2c465d454510dcfa75",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/56/f38ae10daf087018a069951dc9ec6cd222906b": "52e4aaf54734b77699d8a4c3433e6a97",
".git/objects/3d/c24e1c20a549223886e505e3be1f0ec6876fc6": "46a49d9138b811dfd270e7417210cc6b",
".git/objects/67/464ce43c80c5989d7e3d71c656247c63b96662": "48c5eb3ad6ac3e841dd2226db59393aa",
".git/objects/94/dbc09b7c9aefe0504ed06785a86392911fd65e": "aba81064872e659b3a077dac675eeec4",
".git/objects/5a/66acdde9566f765ea05bacff11da4bc0535aa2": "23bd2d447cef8cf2e72d7f1ac906a70d",
".git/objects/a4/ccb6665b311ea87a0f360195a3486f6d4e6192": "9bcab4be38acc5009a334b6d6d005491",
".git/objects/a3/a1e003eeb4df01951683beb69ca82d851709ff": "a0fe4f344cb9ebda2dac007409438684",
".git/objects/b2/1eb0218763fd611b0dca2fb953e2c9e264ae07": "0ab41624b26d913c6223a4027afd966d",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/df/785f515c2a538ad6d9fa8df8147421c6970c97": "0795e4ec668a939c06b0cf61a7eab268",
".git/objects/da/a0a77b0d04019a6a503a496c17351cfb575721": "fcbc3839f2170c58b3db8ca3fc004642",
".git/objects/da/85e9f504fc91b7f8e1060904b2297888618032": "d31cfedc151837d63dfb5aeceb17fbe7",
".git/objects/b4/b1f02621ffadc26c9fdd9f44a5ac9a8b1b0b57": "e126ae0cf12c1885c7e11b45c2df9b71",
".git/objects/bd/cfb27a4fd5374021f41a0af62ea7a9e8a5e3b5": "b8c7dfc5fcdc393b11b542706847decf",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e2/2fe0cc761c6e9b11816c13d036141a9d1712f9": "dcbe5622d8288d650e98dc4fbdcbbe87",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/b1cc9e6a3e0f0e9b23ebf97c27e27aa8415b15": "6b324a9861ab99d81b4724dee542218e",
".git/objects/c7/0b100a3e931a84b061489fea2779cfe28d73d3": "d5a961ea0cfdacc644ec611b7760e28e",
".git/objects/c0/cae35e7bb0eae4b6fc6c5cffe02a8dfcfd8e0a": "bfd0e4a67fb6de8d307bff6fab27839c",
".git/objects/ee/ab6ba20854133c45d0a9fca77725658975557c": "3a7644707eac7b83d4fe3dd5c6da5508",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/822b403aa6d2a0b06d26448412a555b991ccd3": "b4aa4d5852ee7c8ba8ce8b17b631f267",
".git/objects/e3/893d874f83726c7faee6b44a20e3f501a947cf": "018c2070207c5adf1a0677acd0bd09fc",
".git/objects/cf/f0ecaa5e10706dca0091c1f3de662d83a9407a": "82ecbe2ca30983a9945c5dd1ed2ea82b",
".git/objects/fb/4ca5498ca7f26a9f98513955ee5b995d92698f": "153d181af966461b25780e8956f9a4b5",
".git/objects/fb/1fcb2b65b04087c153a191ce4d0f34a7a99bcc": "cb8e2002e6bf65d7929debe6ecb41f8a",
".git/objects/fb/e44e70afe27d0587939762797d908f60a6e503": "4b06020082aa766d2c6ca136af812cec",
".git/objects/ed/89512fda0a07e89cff7d38e5136b2f670de7c4": "b8de24f1888a5212b6e9d4a66be45993",
".git/objects/c6/b10353dd8d0ff08b03b3f82dbe5697d3a09c7b": "8a977f9749efe229ddcd0d8f5bb7108a",
".git/objects/c6/4bb762143907525959656e4d297ba95bda6b8e": "1b094f532bfcd6cecf0272ef01c7b755",
".git/objects/18/f923e7962c457e42b78f72a80536d5ca11eaa7": "f622dba6a4eee4d2aeee708607b7dcc3",
".git/objects/27/5dab2780175b5c686359c09c2b17d068c32190": "55ed535533c1a6312d05271349fcc3c6",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/16/96ffb808d797e1a63e3b773699954918c46649": "5799732b6f7d36962e2c7dda61972ebb",
".git/objects/45/087457365b451353dd029c3e436ac2d57d6fc5": "da605ae47d56118b6b7c8d1512a9b28e",
".git/objects/87/417d7ff9696c8bd14bad0177b13ad5e7dc4ab2": "82f02b2752d43ecbc12f5160bf48f01f",
".git/objects/7b/bccac879585db3e935e0653df103dda4f09b92": "96c47e424fed1972aac99ea83fd04e2e",
".git/objects/7b/740a546446c3c45f5436144350ef545252e5f1": "db53b493ec4aefa021234e8426d0be93",
".git/objects/8a/3b39f1c950f0ae5db29d6056571dc7fe8518a0": "f5b42ec3335f0c344ec0e6586b08079a",
".git/objects/10/261e94e72483db43f14c78e346661e6646ef04": "7a4b4cc462d8c8576b56a66f012afc24",
".git/objects/10/9e09162ca13a58688826bdba02799a2807377e": "1cbece680724604d8d9a5827bdb62a2d",
".git/objects/10/99d70085113c063dcb845e83f6a1780c5d124e": "2e16cd3567a40368adc796c87c8f8b78",
".git/objects/26/faa106be1dc06d11c453104ff44c16720b5a90": "47df2a6d4ef35641d191e8c59f9b6f51",
".git/objects/4d/cc759ca7191c19e0c9b11b8294d931caf25bda": "c0f56fae942671eda5b77ec03b0f0ffb",
".git/objects/75/42c6b0e9cdcf9c8e3f7da12ab5edf7415f9fad": "f31e0e5a82c78b71792ba19b15f96867",
".git/objects/72/ea37aae2c94e13a1e7d1404edc741150a77c60": "990358d8e7232c3b0974691ef0e47f0d",
".git/objects/72/80bdddbc17dfe709057953d0753e5ffd0f0f2e": "ba56b40d645a0f16807ab3de83ab0ea1",
".git/objects/43/363740cfc3182795ed8b06297b713fd12d91c0": "6a0cd2f547307a2ac8c9cb9eec5cb880",
".git/objects/88/288ba343ad9b175a04c9c3e87a39e24e08d9bd": "c58f1ac26a36d77c01811419e83ab89f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/0a840f22dbfc80745bc3b086667518461b4e0b": "062037622074619e757162f96ae0484a",
".git/objects/9f/f263e4a16ad07176e529e011f4dbaa17adc2cb": "db4e93fd493a805d82c58b0b203b0238",
".git/objects/9f/b8d98e6f1de402d39d61f07ae227d41c41b22e": "3273e9d28b2f70213533904bd79a9cfa",
".git/objects/6b/4e5a0a1787a35cb29eeacb5f6254118818b252": "6d78dc20678304c36e3b42575222e665",
".git/objects/07/9e8be21d3e838ba1cb3f4e8f33bee25c1f03ac": "6e4ec9a9068e176d638a4d02f37d90ab",
".git/objects/38/f72c3b661274731c0dca4263c6147292c3313e": "06ec909689545717240ec77454003efe",
".git/objects/9a/da67c27060ef5b5cac3c08c56f40575d428e4f": "ae2b47703fa67a69a177fe593ea2ca74",
".git/objects/9a/dd2edfdfcacd84044c432ff535f592ef95d734": "dfeca61519c06805f72adce42814dcd5",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/31/aa17c583baf9b228089ba7cfcceb1bff6f4bd6": "3d5d63a31be81edb625ee6f10bd8b880",
".git/objects/3a/2e87b5035e779e10f3bb08f80b99a2cf9da23c": "a71c11a187996ecca9a6a66f2cf340e8",
".git/objects/98/dbee74d5d159649e4de157068c482dbefb60f8": "63b3c5dfc5c91e8e9d0f14fc3ab615b1",
".git/objects/3f/2bbf6b015897dbd6aac42ba14dad86599f6ee8": "2971c10e78216f1e4b98cff82b8885b1",
".git/objects/30/b478aa1dfc66b4fea800aa57ed1f0c5de89175": "d35a762040750a8e80bd73e01b8e72f0",
".git/objects/5b/976635ea16caf8ca6c1f81f67fce78053fb0b8": "1e71b00b343239cd458053aeb9e3cf5b",
".git/objects/5b/faab2a2ba51b6a28ba7db730b1cc3ab299977d": "071d5625a64dc2635f772984ec08b922",
".git/objects/06/9d73d2725bd35099099d408d5b849670629e44": "2b318f161a7796469d6762a4f5a32e88",
".git/objects/52/156668c4f00be58121aac36238188a32f30d3a": "5636a620ff1c89b8f98be356fbe096ca",
".git/objects/55/ad1737c89c06e21010aaa7b98acc2b63069cba": "b304da126eda71eb567aee54b38563a6",
".git/objects/63/fc3c4368863dcd0e27d9df42d2edd168a41a5c": "39714c9d445245f0550ad80cee710783",
".git/objects/0a/87869d6efbae08168e89a8b4d55680db839071": "63d06a6e7ebde1134653b5234efe3085",
".git/objects/bf/952e08fd781c7890a36b0451d04de84320b114": "01b67ff69229acd04a5c3de359e8ed3a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/a0/d6c186eb73a257e89d388d13309db99a90be6b": "5d1b94d0a989c6daf9801c4d9c536fc5",
".git/objects/b8/12c0af1bcc1a0fa5421f39acd86646d968a6a0": "409ad7a835ccfc2dfe1d8e66238dc8ca",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/a9/9f6475906eef40003e7cfe3bd41023f3e94bb7": "8511f4a11f87e1f22039891cf26e6c6f",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/aa/65608f3f45fcf576bf7dd83a160091c92b1146": "22d3c89d2ec2c8713d3917fe3b128ce8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/c062f4a4698e7198be9132425785a45c131769": "b377ef728c5a7b5f6271ca81d6a47c9e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/e16071c06b80217725da8a300b01a28e3f9c51": "2eec7f946131f85b27468ec2ac406f75",
".git/objects/c4/48db76077b518a1a438b2c7d362d414b8a9fa7": "7938df06a24e136f568028f2fee5d926",
".git/objects/e1/62c5cf5921b217853dfc401779db0cbc57b1ab": "03c95eac4cfbc8b1d6cbc2820cfc0786",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/f0/41fd1e47cc6eafecad62f8dcd9f3ab4201d0d6": "936713a29ad291c0779026006c2144eb",
".git/objects/e8/504bb677d6234d9bbe581ed4c9950e8083328d": "a832a2d04d960b5cd3d714634101a8de",
".git/objects/e8/85258b9fc4608c1f52bbad0de862aa15617ba4": "930dd08a377b5523e125aba4fba30c43",
".git/objects/c2/67ecd4855980e309520cb912b876f385de20e7": "48acd0fbfe6c5940ec46dec85092343d",
".git/objects/c2/46e0bdaed859b7370ef22751d988c35a436c2c": "1972532e523d8815ceedf0af345f1cb6",
".git/objects/f6/2df622d841343f8bf89e562081b522cd0dc19e": "c9a9b12ad5bf6e50db596ed26ca98fe9",
".git/objects/f1/1cf8243610e963447987b467ebb7686fd6ee44": "f56d76c5fd02eab26bec5dfc6ab4ec24",
".git/objects/ce/5a707bba15a5f4eba632c5059a7919ee3893f1": "861e15ef59ca9a4a17969001272a7b8d",
".git/objects/ce/b9d3bfe144bd1b14bb1086e64aef1b766a861c": "d0a6498f7252af05ef0e82e3df2bc508",
".git/objects/46/c958cb6736f0240394593d0aba81a0db4f4b22": "99e1f00b0cfa06a8fcda960aa23e852e",
".git/objects/83/ff42c9d30796d02c9a8a823b8316dc66a2a73b": "c34455831bc4d97a97008ec896a8b92d",
".git/objects/83/b73af82665d67673e3366370ace9f543cb7237": "2e5aed6cf5557b4680ad02314ee6a584",
".git/objects/1b/0b9a8679a2be56e230125aa36eac3084f63eb2": "d033729d0677bf82cd99d392144fff9b",
".git/objects/77/85c986daee82134d071431a6d27e6154992509": "e6bce7058633528d6af8aae3e6bf3862",
".git/objects/48/b6fdf02d99dd8ea848b60668a03cc940f11805": "8632b1ffd9e79fa8d4a2e47b682b3e50",
".git/objects/48/5026b8f5c9fdb877033a9c1840105051b76623": "f6ac4c3261b4b257ef988e6131b1b9da",
".git/objects/70/2934aa0d87329917730655e9a8215d4520d6fa": "9c6b5b529a1cb4ed1115425d2f187e03",
".git/objects/84/2dda58c24f378f30cdb9e3b5dfc5ca5dd304f0": "3664e39c51744ef27803dc2047879c9e",
".git/objects/24/3edc7199f1c5a105921dabb441dde8e0537674": "e472519b806fe4c39a1de328608e5ea0",
".git/objects/24/7b788b9dbf084a5fc7edd499d3a30482145b40": "9db3a7c447505d2a902a0b7c5ea6e054",
".git/objects/4f/957320b2665bd3f58a0a3d1b03f0695842917f": "1d07df67db524474ecd205ed924643e6",
".git/objects/1d/17a97245545b77c27f89299930a9c94c52a8a4": "7a74214a995e055039afd537a9fab77d",
".git/objects/82/36a23b3f5438f1ffda405eff52c2bc7ba186fb": "95129aaec0019a8f495402de42cf62e2",
".git/objects/40/9bd42c3b070c53b313a71de0b269b86de7c97a": "a205abecd1cdbe2030d583cecc534a45",
".git/objects/40/72c528c6c2501c63950d73c7bf6444b1b0e0d4": "cb6bebcc5940e45fa8990e7fb6683e81",
".git/objects/2e/bcbaba86e8c0d8bf367140683a5261059c8b4c": "3a979690f772fc30cfd09111a6c95922",
".git/objects/8b/488eee4b727cbea94e7a8ac74dfafa23fe0975": "32ce7b2427f4056e2f3be84e6e92149b",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/8e/6e9bd727256a36d3c702bae34338d73b859d33": "46a1ffc4286d93a86aab214d853e5f50",
".git/objects/22/da8e0e46d6b8d970e000dcdc0631b02d15afa3": "6b1514ad6054d417b522c9fdc03616dd",
".git/objects/22/5744bd6947df637fa2f5dbcc5e7c0dea0a6aa1": "9a92957b4a8b60d7f510b1a0baaae628",
".git/objects/22/5b0bf71f26b5607aad14baf6a3cee4162e30ae": "4f59e800654fc5f441ace57dd8085a2a",
".git/objects/22/921c332981230ad777e4f933d104cb116bba88": "a43c80880b65b8e8c598c78f77ed7df1",
".git/objects/25/6dfdc5a95360cb470c39e96158a43a03b4734b": "5bae07fbc6a7a0bd5d8b1bd5b1d52fe1",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "dfc64060122571763ddbf41cb542dd40",
".git/logs/refs/heads/main": "c8b98ff922c9ac4ce160e8ac44c2a4cd",
".git/logs/refs/remotes/origin/main": "3a363d5dedaa0b37affa69554bfebf01",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "6d836494c1bdd5a5029f7e06e46adda5",
".git/refs/remotes/origin/main": "6d836494c1bdd5a5029f7e06e46adda5",
".git/index": "9baacb87366f9b0b28c6c5edfad9f3c2",
".git/COMMIT_EDITMSG": "fa26c0e3c774c1b5011d4ff531a28e9d",
"assets/AssetManifest.json": "dd7ae7117af47b07f3059fec9df0f380",
"assets/NOTICES": "ed57e3792352f6f7fd2b2d30f3376eb0",
"assets/FontManifest.json": "89c2b93a023991d489b7789c11827bc2",
"assets/AssetManifest.bin.json": "1a25a000c92def3278d918acfcf899d0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "dff2f5147046df570f16d361243b7eea",
"assets/packages/youtube_player_iframe/assets/player.html": "663ba81294a9f52b1afe96815bb6ecf9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "0aad99be3de96c82a60e7dfeb878d03a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "6c35abe7cfd441aa49e95917c43c8f04",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "83c878235f9c448928034fe5bcba1c8a",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "dddc5c70148f56609c3fb6b29929388e",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "07c11ed324cc8f69cf4cb172c639c3a6",
"assets/fonts/MaterialIcons-Regular.otf": "99cc9fd0b072f68c45056bcf735a21a4",
"assets/assets/image/email.png": "bc4bc0957c3f37a0663b0f1ad25a68f3",
"assets/assets/image/warning.png": "dc072f5a89cb7a46bde16156f2764611",
"assets/assets/image/factory.png": "428a302aa7a4458cc2b06a174bc123aa",
"assets/assets/image/telegram.png": "321607c074ca0ecd31faaabec1592802",
"assets/assets/image/hero-bg.png": "26142aaf9a4a06afeda3ef31b41ac2c0",
"assets/assets/image/website.png": "c4dd566830d497eed8780e779cf2fd16",
"assets/assets/image/certificate.pdf": "4233442031451c18686994e234402907",
"assets/assets/image/logosplash.png": "1a6a83d01338c85562c00c084550ba97",
"assets/assets/image/pdf_logo.png": "6e0d7b3e62a1a503b708c6b606420371",
"assets/assets/image/excel_logo.png": "cabf92de69a4ab2bbc13968027cd960c",
"assets/assets/image/file.png": "c5c65b80803c65b9963caab7dfcd318d",
"assets/assets/image/english_flag.png": "f646ee2fb7231f6470e2677756ed2298",
"assets/assets/image/cambodia_flag.png": "15bec9f455e7b48fde646de02e2dfcc6",
"assets/assets/image/worker.png": "fe60c219357a6beb0ace93dfb3e8e89a",
"assets/assets/image/undraw_Page_not_found_re_e9o6.png": "c76c8dd46f67128b462344709ae462ed",
"assets/assets/image/error.png": "f38f633f7a43f2474f4cc53af1ae2817",
"assets/assets/image/image.jpeg": "7f22e646889498bc7da53501ecf63a38",
"assets/assets/image/phone.png": "99ec85d3b7cb537ae4f5263603b55dac",
"assets/assets/image/Ministry_Invoice_FWP01340419-1709641400.pdf": "7482ba0c9df4d999a956bb0aeeab1299",
"assets/assets/image/facebook.png": "02e92b97687c09fc41c206faa054674d",
"assets/assets/image/imageAndPDF.png": "27dab9bd7239fee14269be003096faaa",
"assets/assets/image/LogoMLVT.png": "7d7284ae8ba5b4d5c3c56eb3b90953fc",
"assets/assets/icons/sort_down.png": "2c75439830acc7f391328045a167296c",
"assets/assets/icons/info.png": "b0e52a2a6e487ca8c313258c29802953",
"assets/assets/icons/sort_up.png": "b47ae191928bf70b5828accb2944e24b",
"assets/assets/icons/data-processing.png": "7fa3fd1765e8ac9a8561703acfb8b943",
"assets/assets/icons/sorting.png": "da043752a9c2c4397e42b031650d22e3",
"assets/assets/icons/user.png": "810033bc125abd69a2bb61b608316260",
"assets/assets/icons/employment.png": "ff772e8393e90a60c897e054a091176b",
"assets/assets/icons/teamwork.png": "1063efbb94435bd25e57943169d2c9aa",
"assets/assets/icons/request.png": "4a1f236b2acc2df2efb1c24fe520bb2b",
"assets/assets/icons/Excel.png": "5adf3a88f4a5dacb6d1e896d1386d1e5",
"assets/assets/icons/dashboards.png": "6186e931fda6bbeec07d881d6f96328f",
"assets/assets/icons/group-users.png": "8caf3497d8121670ce9e46f19962f292",
"assets/assets/icons/faq.png": "7bfba3bb93bc634fd1b8e198d2b1972b",
"assets/assets/icons/browser.png": "b10ac2b74b1f8052198af5a50d985529",
"assets/assets/icons/404-error.png": "bf56f6d2e82d4cce6f26a10bea6feb83",
"assets/assets/icons/contract.png": "4b82917048026a3f4ddd4b38a4a5926b",
"assets/assets/icons/csv.png": "a49eeac0158c91bae9587680cd249fcb",
"assets/assets/doc/employment_certificate.jpg": "15a73609e2afb90613ff54408a406cb8",
"assets/assets/doc/prokas_wp.jpg": "c86e8300e203791a355b6b8f0aa1b683",
"assets/assets/doc/prokas_04_2022.jpg": "9fb21ce74d933322ac7a9dc456292f5e",
"assets/assets/doc/Appendix_Sample_Worker_List_FV.xlsx": "6a504916764dced4679961cfd94edda7",
"assets/assets/doc/prokas_new.jpg": "ceda29495323f69cb855e901ecdecc72",
"assets/assets/doc/Appendix-Sample-Bio-Import-List-FN-updated.xlsx": "99ad43a0527f50c0ca5ab241f6a96fe6",
"assets/assets/doc/prokas_09_2023_new.jpeg": "6c704e980d98fa79b99c02c2e807b410",
"assets/assets/fonts/Battambang%2520Bold.ttf": "d181e97d6231f4cb6cacbfcc84c7dc3e",
"assets/assets/fonts/SourceSansPro-Bold.otf": "1a2a157bfd94b250884c09f1bd57a0bb",
"assets/assets/fonts/Moul-Regular.ttf": "904c0b4523c3b82d85fde9f62f1a556c",
"assets/assets/fonts/SourceSansPro-Regular.otf": "5e1d162e634a102d7da8db597825a764",
"assets/assets/fonts/KhmerOSBattambang-Regular.ttf": "a680c425b92d3705c1b96c424c4b7208",
"canvaskit/skwasm.js": "4087d5eaf9b62d309478803602d8e131",
"canvaskit/skwasm_heavy.js": "dddba7cbf636e5e28af8de827a6e5b49",
"canvaskit/skwasm.js.symbols": "ffc07b382ae1e2cf61303ec4391ea4ad",
"canvaskit/canvaskit.js.symbols": "05e7032ed1a877f972cbcf13b3ae2a83",
"canvaskit/skwasm_heavy.js.symbols": "ea201db27134823febd57da1f31df2ec",
"canvaskit/skwasm.wasm": "bf03908c64926317680317decd585425",
"canvaskit/chromium/canvaskit.js.symbols": "8fce22f4d72ad11f225a4999cd247660",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "79edcb1b72306f512e90f3e5e4063b40",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "dfd8c2ccd4a55ef5eb15ea5526ce88c7",
"canvaskit/skwasm_heavy.wasm": "a8695a49f5aee9479f64b69a90674703"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
