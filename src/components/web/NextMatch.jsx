import React from "react";
import VersusCard from "./VersusCard";
import PlayersTab from "./PlayersTab";

const data = {
  id: "clrpyf4ac0007wl0gw4s4ato2",
  datetime: "2024-01-23T14:30:00.000Z",
  timezone: "Asia/Kolkata",
  hometeamid: "9",
  awayteamid: "1",
  hometeam: {
    fullName: "Royal Challengers Bangalore",
    shortName: "RCB",
    logo: "https://res.cloudinary.com/dzxgw55uq/image/upload/v1705678844/image_21_hbtkx5.png",
    teamid: "9",
    players: [
      {
        id: "clrklkd9s000l1fph14bkbh9j",
        country: "indian",
        fullname: "Virat Kohli",
        profileimage:
          "https://res.cloudinary.com/dzxgw55uq/image/upload/v1705659991/iplfantasyleague/qe9su6bxjgcoowsrjoaz.webp",
        role: "Batsman",
      },
      {
        id: "clroq2wnj0001mpswxiigsn2f",
        country: "foreigner",
        fullname: "Faf du Plessis",
        profileimage:
          "https://res.cloudinary.com/dzxgw55uq/image/upload/v1705915558/iplfantasyleague/vhqaygxgpnqxgrmgmw8b.webp",
        role: "Batsman",
      },
      {
        id: "clroqcfm50003mpsw3dttbgjn",
        country: "foreigner",
        fullname: "Glenn Maxwell",
        profileimage:
          "https://res.cloudinary.com/dzxgw55uq/image/upload/v1705916002/iplfantasyleague/cdtvvvneqfx4efbbizzs.webp",
        role: "Allrounder",
      },
      {
        id: "clroqmqso0005mpswbr0q0o3c",
        country: "foreigner",
        fullname: "Cameron Green",
        profileimage:
          "https://res.cloudinary.com/dzxgw55uq/image/upload/v1705922395/iplfantasyleague/ahy7aazyjhfdhygszjre.webp",
        role: "Allrounder",
      },
      {
        id: "clrow8ia60001hoqbhncd8w7s",
        country: "indian",
        fullname: "Rajat Patidar",
        profileimage:
          "https://res.cloudinary.com/dzxgw55uq/image/upload/v1705925901/iplfantasyleague/mt8bqragxbozjinhxaxl.webp",
        role: "Batsman",
      },
      {
        id: "clrowqsjy000197o63ao4g4az",
        country: "indian",
        fullname: "Anuj Rawat",
        profileimage:
          "https://res.cloudinary.com/dzxgw55uq/image/upload/v1705926754/iplfantasyleague/ijz53uvwonblevrsu0gf.webp",
        role: "WicketKeeper",
      },
      {
        id: "clrowwud50001p9ucbsiifc5i",
        country: "indian",
        fullname: "Dinesh Karthik",
        profileimage:
          "https://res.cloudinary.com/dzxgw55uq/image/upload/v1705927032/iplfantasyleague/up49t61kxohlvhoitb9h.webp",
        role: "WicketKeeper",
      },
      {
        id: "clrowz7fp0003p9uck9clfhs1",
        country: "indian",
        fullname: "Suyash Prabhudessai",
        profileimage:
          "https://res.cloudinary.com/dzxgw55uq/image/upload/v1705927142/iplfantasyleague/jfuaqercfls7efcd879n.webp",
        role: "Allrounder",
      },
      {
        id: "clrox1h9l0005p9ucnt3myudc",
        country: "foreigner",
        fullname: "Will Jacks",
        profileimage:
          "https://res.cloudinary.com/dzxgw55uq/image/upload/v1705927248/iplfantasyleague/un4auhoa4v8anp55ibb2.webp",
        role: "Allrounder",
      },
      {
        id: "clrox4zwi0007p9uciucownvt",
        country: "indian",
        fullname: "Mahipal Lomror",
        profileimage:
          "https://res.cloudinary.com/dzxgw55uq/image/upload/v1705927412/iplfantasyleague/v942voxnxgs6q9swlnep.webp",
        role: "Allrounder",
      },
      {
        id: "clrox6mgn0009p9uc3guu2aet",
        country: "indian",
        fullname: "Karn Sharma",
        profileimage:
          "https://res.cloudinary.com/dzxgw55uq/image/upload/v1705927488/iplfantasyleague/tmbr7gvwscf5avpjmi68.webp",
        role: "Blower",
      },
      {
        id: "clrox8ilz000bp9uc1y9fex01",
        country: "indian",
        fullname: "Manoj Bhandage",
        profileimage:
          "https://res.cloudinary.com/dzxgw55uq/image/upload/v1705927576/iplfantasyleague/jtahqrlayjdfiffzat7s.webp",
        role: "Allrounder",
      },
      {
        id: "clroxaz45000dp9ucqmrd3msy",
        country: "indian",
        fullname: "Mayank Dagar",
        profileimage:
          "https://res.cloudinary.com/dzxgw55uq/image/upload/v1705927691/iplfantasyleague/ojuommmatlt7khv157ek.webp",
        role: "Allrounder",
      },
      {
        id: "clroxdyi3000fp9ucab11luu2",
        country: "indian",
        fullname: "Vijaykumar Vyshak",
        profileimage:
          "https://res.cloudinary.com/dzxgw55uq/image/upload/v1705927830/iplfantasyleague/qznufvdbdnjdcswf0fxp.webp",
        role: "Blower",
      },
      {
        id: "clroxfnmq000hp9uc0886z7k6",
        country: "indian",
        fullname: "Akash Deep",
        profileimage:
          "https://res.cloudinary.com/dzxgw55uq/image/upload/v1705927910/iplfantasyleague/rdrte9sstjomvgrrdyak.webp",
        role: "Blower",
      },
      {
        id: "clroyqk4c0001o0iqhygfzqie",
        country: "indian",
        fullname: "Mohammed Siraj",
        profileimage:
          "https://res.cloudinary.com/dzxgw55uq/image/upload/v1705930103/iplfantasyleague/joh57xyf66dzynzkhu2q.webp",
        role: "Blower",
      },
      {
        id: "clroys0wk0003o0iqyczph49q",
        country: "foreigner",
        fullname: "Reece Topley",
        profileimage:
          "https://res.cloudinary.com/dzxgw55uq/image/upload/v1705930171/iplfantasyleague/drxj0ozjo2apvhkovh0s.webp",
        role: "Blower",
      },
      {
        id: "clroytqvb0005o0iqk6f7wydn",
        country: "indian",
        fullname: "Himanshu Sharma",
        profileimage:
          "https://res.cloudinary.com/dzxgw55uq/image/upload/v1705930251/iplfantasyleague/rr3stz8zzrgvdkhum65s.webp",
        role: "Blower",
      },
      {
        id: "clroyutcs0007o0iqtfpv4hml",
        country: "indian",
        fullname: "Rajan Kumar",
        profileimage:
          "https://res.cloudinary.com/dzxgw55uq/image/upload/v1705930301/iplfantasyleague/grjjtrpbxkj4um4ubvtp.webp",
        role: "Blower",
      },
      {
        id: "clroyw92c0009o0iq925mko09",
        country: "foreigner",
        fullname: "Alzarri Joseph",
        profileimage:
          "https://res.cloudinary.com/dzxgw55uq/image/upload/v1705930368/iplfantasyleague/p6arwc2leqztrywfxijx.webp",
        role: "Blower",
      },
      {
        id: "clroyxja3000bo0iqwe7nbq84",
        country: "indian",
        fullname: "Yash Dayal",
        profileimage:
          "https://res.cloudinary.com/dzxgw55uq/image/upload/v1705930428/iplfantasyleague/bn2xfl2qghi21kpip1vk.webp",
        role: "Blower",
      },
      {
        id: "clroyyvpn000do0iqq1r0n98v",
        country: "foreigner",
        fullname: "Tom Curran",
        profileimage:
          "https://res.cloudinary.com/dzxgw55uq/image/upload/v1705930491/iplfantasyleague/yixamfjcqhnraprjajvj.webp",
        role: "Allrounder",
      },
      {
        id: "clroz02yq000fo0iqnuql91vk",
        country: "foreigner",
        fullname: "Lockie Ferguson",
        profileimage:
          "https://res.cloudinary.com/dzxgw55uq/image/upload/v1705930547/iplfantasyleague/fcibetvmaixytyyuqrwd.webp",
        role: "Blower",
      },
      {
        id: "clroz1k04000ho0iql7wqu7e7",
        country: "indian",
        fullname: "Swapnil Singh",
        profileimage:
          "https://res.cloudinary.com/dzxgw55uq/image/upload/v1705930616/iplfantasyleague/ddikp8ari8oonptq147g.webp",
        role: "Allrounder",
      },
      {
        id: "clroz3a4o000jo0iqndlru3b4",
        country: "indian",
        fullname: "Saurav Chauhan",
        profileimage:
          "https://res.cloudinary.com/dzxgw55uq/image/upload/v1705930696/iplfantasyleague/irbahui9xh0igxxpxrax.webp",
        role: "Batsman",
      },
    ],
  },
  awayteam: {
    fullName: "Chennai Super Kings",
    shortName: "CSK",
    logo: "https://res.cloudinary.com/dzxgw55uq/image/upload/v1705678844/image_15_gd9ezr.png",
    teamid: "1",
    players: [
      {
        id: "clroqwmie0007mpsw5x7jzfn9",
        country: "indian",
        fullname: "MS Dhoni",
        profileimage:
          "https://res.cloudinary.com/dzxgw55uq/image/upload/v1705916944/iplfantasyleague/pdp7kuustgstlycbj7lt.webp",
        role: "WicketKeeper",
      },
      {
        id: "clroz6dry000lo0iqck87uy1y",
        country: "foreigner",
        fullname: "Moeen Ali",
        profileimage:
          "https://res.cloudinary.com/dzxgw55uq/image/upload/v1705930841/iplfantasyleague/oh28msdb7lqkrzinjmau.webp",
        role: "Allrounder",
      },
      {
        id: "clrp24pkf000167qy5nye3oqj",
        country: "indian",
        fullname: "Deepak Chahar",
        profileimage:
          "https://res.cloudinary.com/dzxgw55uq/image/upload/v1705935802/iplfantasyleague/wrd3k8ivp7ey6wthx3xt.webp",
        role: "Allrounder",
      },
      {
        id: "clrp26v59000367qy72dmjqmq",
        country: "foreigner",
        fullname: "Devon Conway",
        profileimage:
          "https://res.cloudinary.com/dzxgw55uq/image/upload/v1705935902/iplfantasyleague/cw44xxkrq7asosmabfiu.webp",
        role: "Batsman",
      },
      {
        id: "clrp283s5000567qydm6l73tb",
        country: "indian",
        fullname: "Tushar Deshpande",
        profileimage:
          "https://res.cloudinary.com/dzxgw55uq/image/upload/v1705935960/iplfantasyleague/ha5tipos3ghpzfhkhhdz.webp",
        role: "Blower",
      },
      {
        id: "clrp2a2h50001p470fecj1yxi",
        country: "indian",
        fullname: "Shivam Dube",
        profileimage:
          "https://res.cloudinary.com/dzxgw55uq/image/upload/v1705936051/iplfantasyleague/ikf6emaq3foiwzodvhfu.webp",
        role: "Allrounder",
      },
      {
        id: "clrp2bjg40003p470a2jslgl5",
        country: "indian",
        fullname: "Ruturaj Gaikwad",
        profileimage:
          "https://res.cloudinary.com/dzxgw55uq/image/upload/v1705936120/iplfantasyleague/bklzml1fltse4a0i9qwt.webp",
        role: "Batsman",
      },
      {
        id: "clrp2ey2r0005p470u7u092g7",
        country: "indian",
        fullname: "Rajvardhan Hangargekar",
        profileimage:
          "https://res.cloudinary.com/dzxgw55uq/image/upload/v1705936278/iplfantasyleague/r5uk4i78c3lk0gdhj7wf.webp",
        role: "Blower",
      },
      {
        id: "clrp44zof0001xo3tmvht4dq1",
        country: "indian",
        fullname: "Ravindra Jadeja",
        profileimage:
          "https://res.cloudinary.com/dzxgw55uq/image/upload/v1705939174/iplfantasyleague/nerzlfme9syv4gzaopgz.webp",
        role: "Allrounder",
      },
      {
        id: "clrp46qzy0003xo3tiusrsqi3",
        country: "indian",
        fullname: "Ajay Mandal",
        profileimage:
          "https://res.cloudinary.com/dzxgw55uq/image/upload/v1705939256/iplfantasyleague/l23dhfvusp4ksk1gwegv.webp",
        role: "Allrounder",
      },
      {
        id: "clrp47vs20005xo3t92n9gksq",
        country: "indian",
        fullname: "Mukesh Choudhary",
        profileimage:
          "https://res.cloudinary.com/dzxgw55uq/image/upload/v1705939309/iplfantasyleague/yt3qrrb9oiwrtuzvymi3.webp",
        role: "Blower",
      },
      {
        id: "clrp495f00007xo3tdvgtmfih",
        country: "indian",
        fullname: "Matheesha Pathirana",
        profileimage:
          "https://res.cloudinary.com/dzxgw55uq/image/upload/v1705939368/iplfantasyleague/tw64sdjaxu8oynjtjefp.webp",
        role: "Blower",
      },
      {
        id: "clrp4aaoe0009xo3trlzhes6h",
        country: "indian",
        fullname: "Ajinkya Rahane",
        profileimage:
          "https://res.cloudinary.com/dzxgw55uq/image/upload/v1705939421/iplfantasyleague/rxtg1fwjs8yhqks7u2xy.webp",
        role: "Batsman",
      },
      {
        id: "clrp4chmy0001hlhtkq86e0mx",
        country: "indian",
        fullname: "Shaik Rasheed",
        profileimage:
          "https://res.cloudinary.com/dzxgw55uq/image/upload/v1705939524/iplfantasyleague/shosmhnl3m2rsaa1yysx.webp",
        role: "Batsman",
      },
      {
        id: "clrp4dkrs0003hlhtbep9g3ww",
        country: "foreigner",
        fullname: "Mitchell Santner",
        profileimage:
          "https://res.cloudinary.com/dzxgw55uq/image/upload/v1705939575/iplfantasyleague/lsmgkyzaicvrcc2omls4.webp",
        role: "Allrounder",
      },
      {
        id: "clrp4f12v0005hlht0hijjsgl",
        country: "indian",
        fullname: "Simarjeet Singh",
        profileimage:
          "https://res.cloudinary.com/dzxgw55uq/image/upload/v1705939642/iplfantasyleague/us6cnj97nkneuvrrrk5s.webp",
        role: "Blower",
      },
      {
        id: "clrp4gpje0007hlhth71p41z2",
        country: "indian",
        fullname: "Nishant Sindhu",
        profileimage:
          "https://res.cloudinary.com/dzxgw55uq/image/upload/v1705939721/iplfantasyleague/wuj1qsytvgpskzhdnkxb.webp",
        role: "Allrounder",
      },
      {
        id: "clrp4icfd000bxo3tu71po7ao",
        country: "indian",
        fullname: "Prashant Solanki",
        profileimage:
          "https://res.cloudinary.com/dzxgw55uq/image/upload/v1705939797/iplfantasyleague/t56v72cvgwtk873cfuwe.webp",
        role: "Blower",
      },
      {
        id: "clrp4ju8m000dxo3tfwgho18y",
        country: "foreigner",
        fullname: "Maheesh Theekshana",
        profileimage:
          "https://res.cloudinary.com/dzxgw55uq/image/upload/v1705939867/iplfantasyleague/agtebbl0qhttk9m4v6sn.webp",
        role: "Blower",
      },
      {
        id: "clrp4lod1000fxo3trupbbf4o",
        country: "foreigner",
        fullname: "Rachin Ravindra",
        profileimage:
          "https://res.cloudinary.com/dzxgw55uq/image/upload/v1705939952/iplfantasyleague/ocwf9rracvzpfb2sddcg.webp",
        role: "Batsman",
      },
      {
        id: "clrp4mvw7000hxo3tqbgwqjo1",
        country: "indian",
        fullname: "Shardul Thakur",
        profileimage:
          "https://res.cloudinary.com/dzxgw55uq/image/upload/v1705940009/iplfantasyleague/jxiufg3pzvpf5afzfcde.webp",
        role: "Allrounder",
      },
      {
        id: "clrp4ofga000jxo3tp5976q3u",
        country: "foreigner",
        fullname: "Daryl Mitchell",
        profileimage:
          "https://res.cloudinary.com/dzxgw55uq/image/upload/v1705940081/iplfantasyleague/vowpgzuagooixbneaims.webp",
        role: "Allrounder",
      },
      {
        id: "clrp4pry6000lxo3t6uqgmyem",
        country: "indian",
        fullname: "Sameer Rizvi",
        profileimage:
          "https://res.cloudinary.com/dzxgw55uq/image/upload/v1705940144/iplfantasyleague/s3envqwmw1q6big7fjaq.webp",
        role: "Batsman",
      },
      {
        id: "clrp4rabd000nxo3tu30n8ykd",
        country: "foreigner",
        fullname: "Mustafizur Rahman",
        profileimage:
          "https://res.cloudinary.com/dzxgw55uq/image/upload/v1705940214/iplfantasyleague/m5iuqeu9dsuwrwtktiix.webp",
        role: "Blower",
      },
      {
        id: "clrp4strp0009hlht6v87pdiy",
        country: "indian",
        fullname: "Avanish Rao Aravelly",
        profileimage:
          "https://res.cloudinary.com/dzxgw55uq/image/upload/v1705940286/iplfantasyleague/yhejgsxjux33zkttyczy.webp",
        role: "WicketKeeper",
      },
    ],
  },
};

function NextMatch() {
  const verusdata = {
    datetime: data.datetime,
    hometeam: data.hometeam.shortName,
    hometeamlogo: data.hometeam.logo,
    awayteam: data.awayteam.shortName,
    awayteamlogo: data.awayteam.logo,
  };
  return (
    <div className="flex flex-col">
      <VersusCard verusdata={verusdata} />
      <PlayersTab hometeam={data.hometeam} awayteam={data.awayteam} />
    </div>
  );
}

export default NextMatch;
