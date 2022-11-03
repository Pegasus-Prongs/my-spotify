import Search from "./Search";
import { useEffect, useState } from "react";
import { Track as TrackType } from "../types/body.types";
import Poster from "./Poster";
import Track from "./Track";

interface BodyProps {
  chooseTrack: (track: TrackType) => void;
}

const Body = ({ chooseTrack }: BodyProps) => {
  const [search, setSearch] = useState<string>("");
  const [searchResults, setSearchresults] = useState<string[]>([]);
  const [music, setMusic] = useState<TrackType[]>([]);

  const genres = [
    "Classic",
    "House",
    "Electronic",
    "Minimal",
    "Chillout",
    "Country",
    "Techno",
    "Hip-hop",
    "Blues",
  ];

  useEffect(() => {
    setMusic([
      {
        layout: "5",
        type: "MUSIC",
        key: "632531170",
        title: "Unholy",
        subtitle: "Sam Smith & Kim Petras",
        share: {
          subject: "Unholy - Sam Smith & Kim Petras",
          text: "I used Shazam to discover Unholy by Sam Smith & Kim Petras.",
          href: "https://www.shazam.com/track/632531170/unholy",
          image:
            "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/0d/97/a6/0d97a649-760f-522c-269d-9d710dc372ba/22UM1IM07174.rgb.jpg/400x400cc.jpg",
          twitter:
            "I used @Shazam to discover Unholy by Sam Smith & Kim Petras.",
          html: "https://www.shazam.com/snippets/email-share/632531170?lang=en&country=GB",
          avatar:
            "https://is2-ssl.mzstatic.com/image/thumb/Features115/v4/02/ec/b3/02ecb3c1-8c1c-7100-c430-a251066460a2/pr_source.png/800x800cc.jpg",
          snapchat: "https://www.shazam.com/partner/sc/track/632531170",
        },
        images: {
          background:
            "https://is2-ssl.mzstatic.com/image/thumb/Features115/v4/02/ec/b3/02ecb3c1-8c1c-7100-c430-a251066460a2/pr_source.png/800x800cc.jpg",
          coverart:
            "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/0d/97/a6/0d97a649-760f-522c-269d-9d710dc372ba/22UM1IM07174.rgb.jpg/400x400cc.jpg",
          coverarthq:
            "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/0d/97/a6/0d97a649-760f-522c-269d-9d710dc372ba/22UM1IM07174.rgb.jpg/400x400cc.jpg",
          joecolor: "b:36311dp:e4c29ds:e0a581t:c1a583q:be8e6d",
        },
        hub: {
          type: "APPLEMUSIC",
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
          actions: [
            {
              name: "apple",
              type: "applemusicplay",
              id: "1649325659",
            },
            {
              name: "apple",
              type: "uri",
              uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/3c/2c/82/3c2c8235-9907-0405-b21c-8fd66d285e56/mzaf_6122099414111658029.plus.aac.ep.m4a",
            },
          ],
          options: [
            {
              caption: "OPEN",
              actions: [
                {
                  name: "hub:applemusic:deeplink",
                  type: "applemusicopen",
                  uri: "https://music.apple.com/gb/album/unholy/1649325651?i=1649325659&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
                {
                  name: "hub:applemusic:deeplink",
                  type: "uri",
                  uri: "https://music.apple.com/gb/album/unholy/1649325651?i=1649325659&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
              ],
              beacondata: {
                type: "open",
                providername: "applemusic",
              },
              image:
                "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
              type: "open",
              listcaption: "Open in Apple Music",
              overflowimage:
                "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
              colouroverflowimage: false,
              providername: "applemusic",
            },
          ],
          explicit: false,
          displayname: "APPLE MUSIC",
        },
        artists: [
          {
            alias: "sam-smith",
            id: "42",
            adamid: "156488786",
          },
          {
            alias: "kim-petras",
            id: "42",
            adamid: "291697579",
          },
        ],
        url: "https://www.shazam.com/track/632531170/unholy",
        highlightsurls: {},
        properties: {},
      },
      {
        layout: "5",
        type: "MUSIC",
        key: "636972694",
        title: "The Astronaut",
        subtitle: "JIN",
        share: {
          subject: "The Astronaut - JIN",
          text: "I used Shazam to discover The Astronaut by JIN.",
          href: "https://www.shazam.com/track/636972694/the-astronaut",
          image:
            "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/1b/38/ea/1b38eacd-158d-5040-8887-2786d2a641bc/192641874338_Cover.jpg/400x400cc.jpg",
          twitter: "I used @Shazam to discover The Astronaut by JIN.",
          html: "https://www.shazam.com/snippets/email-share/636972694?lang=en&country=GB",
          avatar:
            "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/a1/b7/ca/a1b7ca45-84c6-1939-70cb-fdfb79c23b68/c6967405-5d2d-4e64-91ec-be857bb9b0b6_ami-identity-e3de1066dd9a89fa6fadb60b1a50fdd9-2022-10-24T04-08-49.135Z_cropped.png/800x800cc.jpg",
          snapchat: "https://www.shazam.com/partner/sc/track/636972694",
        },
        images: {
          background:
            "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/a1/b7/ca/a1b7ca45-84c6-1939-70cb-fdfb79c23b68/c6967405-5d2d-4e64-91ec-be857bb9b0b6_ami-identity-e3de1066dd9a89fa6fadb60b1a50fdd9-2022-10-24T04-08-49.135Z_cropped.png/800x800cc.jpg",
          coverart:
            "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/1b/38/ea/1b38eacd-158d-5040-8887-2786d2a641bc/192641874338_Cover.jpg/400x400cc.jpg",
          coverarthq:
            "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/1b/38/ea/1b38eacd-158d-5040-8887-2786d2a641bc/192641874338_Cover.jpg/400x400cc.jpg",
          joecolor: "b:000000p:fdfdfds:2ffdcbt:cacacaq:25caa3",
        },
        hub: {
          type: "APPLEMUSIC",
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
          actions: [
            {
              name: "apple",
              type: "applemusicplay",
              id: "1649563461",
            },
            {
              name: "apple",
              type: "uri",
              uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/bc/5c/5c/bc5c5ca1-0aa1-457d-65ce-f0f56f8a8245/mzaf_12809811648741532519.plus.aac.ep.m4a",
            },
          ],
          options: [
            {
              caption: "OPEN",
              actions: [
                {
                  name: "hub:applemusic:deeplink",
                  type: "applemusicopen",
                  uri: "https://music.apple.com/gb/album/the-astronaut/1649563458?i=1649563461&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
                {
                  name: "hub:applemusic:deeplink",
                  type: "uri",
                  uri: "https://music.apple.com/gb/album/the-astronaut/1649563458?i=1649563461&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
              ],
              beacondata: {
                type: "open",
                providername: "applemusic",
              },
              image:
                "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
              type: "open",
              listcaption: "Open in Apple Music",
              overflowimage:
                "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
              colouroverflowimage: false,
              providername: "applemusic",
            },
          ],
          explicit: false,
          displayname: "APPLE MUSIC",
        },
        artists: [
          {
            alias: "jin",
            id: "42",
            adamid: "1191850724",
          },
        ],
        url: "https://www.shazam.com/track/636972694/the-astronaut",
        highlightsurls: {},
        properties: {},
      },
      {
        layout: "5",
        type: "MUSIC",
        key: "626708777",
        title: "Miss You",
        subtitle: "Oliver Tree & Robin Schulz",
        share: {
          subject: "Miss You - Oliver Tree & Robin Schulz",
          text: "I used Shazam to discover Miss You by Oliver Tree & Robin Schulz.",
          href: "https://www.shazam.com/track/626708777/miss-you",
          image:
            "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/69/e0/27/69e02785-714c-d0b9-ba68-04a2361fa7e5/075679730466.jpg/400x400cc.jpg",
          twitter:
            "I used @Shazam to discover Miss You by Oliver Tree & Robin Schulz.",
          html: "https://www.shazam.com/snippets/email-share/626708777?lang=en&country=GB",
          avatar:
            "https://is4-ssl.mzstatic.com/image/thumb/Music126/v4/c2/71/66/c2716603-3ffb-7965-b3e3-98d09c433c49/pr_source.png/800x800cc.jpg",
          snapchat: "https://www.shazam.com/partner/sc/track/626708777",
        },
        images: {
          background:
            "https://is4-ssl.mzstatic.com/image/thumb/Music126/v4/c2/71/66/c2716603-3ffb-7965-b3e3-98d09c433c49/pr_source.png/800x800cc.jpg",
          coverart:
            "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/69/e0/27/69e02785-714c-d0b9-ba68-04a2361fa7e5/075679730466.jpg/400x400cc.jpg",
          coverarthq:
            "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/69/e0/27/69e02785-714c-d0b9-ba68-04a2361fa7e5/075679730466.jpg/400x400cc.jpg",
          joecolor: "b:fea300p:090500s:4c1200t:3a2500q:6f2f00",
        },
        hub: {
          type: "APPLEMUSIC",
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
          actions: [
            {
              name: "apple",
              type: "applemusicplay",
              id: "1638208778",
            },
            {
              name: "apple",
              type: "uri",
              uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/78/d1/8f/78d18f9f-671b-3c3c-0033-917651170937/mzaf_14625856779470870222.plus.aac.ep.m4a",
            },
          ],
          options: [
            {
              caption: "OPEN",
              actions: [
                {
                  name: "hub:applemusic:deeplink",
                  type: "applemusicopen",
                  uri: "https://music.apple.com/gb/album/miss-you/1638208775?i=1638208778&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
                {
                  name: "hub:applemusic:deeplink",
                  type: "uri",
                  uri: "https://music.apple.com/gb/album/miss-you/1638208775?i=1638208778&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
              ],
              beacondata: {
                type: "open",
                providername: "applemusic",
              },
              image:
                "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
              type: "open",
              listcaption: "Open in Apple Music",
              overflowimage:
                "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
              colouroverflowimage: false,
              providername: "applemusic",
            },
          ],
          explicit: true,
          displayname: "APPLE MUSIC",
        },
        artists: [
          {
            alias: "oliver-tree",
            id: "42",
            adamid: "1140096017",
          },
          {
            alias: "robin-schulz",
            id: "42",
            adamid: "347433400",
          },
        ],
        url: "https://www.shazam.com/track/626708777/miss-you",
        highlightsurls: {},
        properties: {},
      },
      {
        layout: "5",
        type: "MUSIC",
        key: "628935200",
        title: "I'm Good (Blue)",
        subtitle: "David Guetta & Bebe Rexha",
        share: {
          subject: "I'm Good (Blue) - David Guetta & Bebe Rexha",
          text: "I used Shazam to discover I'm Good (Blue) by David Guetta & Bebe Rexha.",
          href: "https://www.shazam.com/track/628935200/im-good-blue",
          image:
            "https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/52/cb/10/52cb1071-3533-aad3-4ae7-a6cb44a056ab/5054197425530.jpg/400x400cc.jpg",
          twitter:
            "I used @Shazam to discover I'm Good (Blue) by David Guetta & Bebe Rexha.",
          html: "https://www.shazam.com/snippets/email-share/628935200?lang=en&country=GB",
          avatar:
            "https://is5-ssl.mzstatic.com/image/thumb/Features115/v4/d4/0c/2d/d40c2d6c-9ebc-b1b3-6cd8-36a9fb9d4eef/mzl.jynpmslg.jpg/800x800cc.jpg",
          snapchat: "https://www.shazam.com/partner/sc/track/628935200",
        },
        images: {
          background:
            "https://is5-ssl.mzstatic.com/image/thumb/Features115/v4/d4/0c/2d/d40c2d6c-9ebc-b1b3-6cd8-36a9fb9d4eef/mzl.jynpmslg.jpg/800x800cc.jpg",
          coverart:
            "https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/52/cb/10/52cb1071-3533-aad3-4ae7-a6cb44a056ab/5054197425530.jpg/400x400cc.jpg",
          coverarthq:
            "https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/52/cb/10/52cb1071-3533-aad3-4ae7-a6cb44a056ab/5054197425530.jpg/400x400cc.jpg",
          joecolor: "b:a700ccp:b1fe64s:8de9dct:afcb78q:92bbd9",
        },
        hub: {
          type: "APPLEMUSIC",
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
          actions: [
            {
              name: "apple",
              type: "applemusicplay",
              id: "1650558000",
            },
            {
              name: "apple",
              type: "uri",
              uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/4f/d1/6e/4fd16e9e-aee3-f565-f7ac-d374959bed75/mzaf_13334718501163194135.plus.aac.ep.m4a",
            },
          ],
          options: [
            {
              caption: "OPEN",
              actions: [
                {
                  name: "hub:applemusic:deeplink",
                  type: "applemusicopen",
                  uri: "https://music.apple.com/gb/album/im-good-blue/1650557353?i=1650558000&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
                {
                  name: "hub:applemusic:deeplink",
                  type: "uri",
                  uri: "https://music.apple.com/gb/album/im-good-blue/1650557353?i=1650558000&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
              ],
              beacondata: {
                type: "open",
                providername: "applemusic",
              },
              image:
                "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
              type: "open",
              listcaption: "Open in Apple Music",
              overflowimage:
                "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
              colouroverflowimage: false,
              providername: "applemusic",
            },
          ],
          explicit: true,
          displayname: "APPLE MUSIC",
        },
        artists: [
          {
            alias: "david-guetta",
            id: "42",
            adamid: "5557599",
          },
          {
            alias: "bebe-rexha",
            id: "42",
            adamid: "466059563",
          },
        ],
        url: "https://www.shazam.com/track/628935200/im-good-blue",
        highlightsurls: {},
        properties: {},
      },
      {
        layout: "5",
        type: "MUSIC",
        key: "639053666",
        title:
          "Lift Me Up (From Black Panther: Wakanda Forever - Music From and Inspired By)",
        subtitle: "Rihanna",
        share: {
          subject:
            "Lift Me Up (From Black Panther: Wakanda Forever - Music From and Inspired By) - Rihanna",
          text: "I used Shazam to discover Lift Me Up (From Black Panther: Wakanda Forever - Music From and Inspired By) by Rihanna.",
          href: "https://www.shazam.com/track/639053666/lift-me-up-from-black-panther-wakanda-forever-music",
          image:
            "https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/46/17/80/461780d4-8620-3e89-7cc4-7f1f08152924/22UM1IM24755.rgb.jpg/400x400cc.jpg",
          twitter:
            "I used @Shazam to discover Lift Me Up (From Black Panther: Wakanda Forever - Music From and Inspired By) by Rihanna.",
          html: "https://www.shazam.com/snippets/email-share/639053666?lang=en&country=GB",
          avatar:
            "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/c3/64/22/c3642227-2af3-1d93-0721-c91a65e521d4/79d56625-c24d-4599-9919-5d999b69398f_ami-identity-d7c7fc06e25964f71047f919dd682d38-2022-10-28T03-56-00.951Z_cropped.png/800x800cc.jpg",
          snapchat: "https://www.shazam.com/partner/sc/track/639053666",
        },
        images: {
          background:
            "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/c3/64/22/c3642227-2af3-1d93-0721-c91a65e521d4/79d56625-c24d-4599-9919-5d999b69398f_ami-identity-d7c7fc06e25964f71047f919dd682d38-2022-10-28T03-56-00.951Z_cropped.png/800x800cc.jpg",
          coverart:
            "https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/46/17/80/461780d4-8620-3e89-7cc4-7f1f08152924/22UM1IM24755.rgb.jpg/400x400cc.jpg",
          coverarthq:
            "https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/46/17/80/461780d4-8620-3e89-7cc4-7f1f08152924/22UM1IM24755.rgb.jpg/400x400cc.jpg",
          joecolor: "b:898989p:070707s:161616t:212121q:2d2d2d",
        },
        hub: {
          type: "APPLEMUSIC",
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
          actions: [
            {
              name: "apple",
              type: "applemusicplay",
              id: "1651763192",
            },
            {
              name: "apple",
              type: "uri",
              uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/37/ec/71/37ec7188-c1f5-47c1-43a7-28d32e26f172/mzaf_7868625517086999040.plus.aac.ep.m4a",
            },
          ],
          options: [
            {
              caption: "OPEN",
              actions: [
                {
                  name: "hub:applemusic:deeplink",
                  type: "applemusicopen",
                  uri: "https://music.apple.com/gb/album/lift-me-up-from-black-panther-wakanda-forever-music/1651763191?i=1651763192&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
                {
                  name: "hub:applemusic:deeplink",
                  type: "uri",
                  uri: "https://music.apple.com/gb/album/lift-me-up-from-black-panther-wakanda-forever-music/1651763191?i=1651763192&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
              ],
              beacondata: {
                type: "open",
                providername: "applemusic",
              },
              image:
                "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
              type: "open",
              listcaption: "Open in Apple Music",
              overflowimage:
                "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
              colouroverflowimage: false,
              providername: "applemusic",
            },
          ],
          explicit: false,
          displayname: "APPLE MUSIC",
        },
        artists: [
          {
            alias: "rihanna",
            id: "42",
            adamid: "63346553",
          },
        ],
        url: "https://www.shazam.com/track/639053666/lift-me-up-from-black-panther-wakanda-forever-music",
        highlightsurls: {},
        properties: {},
      },
      {
        layout: "5",
        type: "MUSIC",
        key: "498502624",
        title: "Under The Influence",
        subtitle: "Chris Brown",
        share: {
          subject: "Under The Influence - Chris Brown",
          text: "I used Shazam to discover Under The Influence by Chris Brown.",
          href: "https://www.shazam.com/track/498502624/under-the-influence",
          image:
            "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/97/ec/96/97ec963b-8829-f040-fe40-508069d6044b/196589418449.jpg/400x400cc.jpg",
          twitter:
            "I used @Shazam to discover Under The Influence by Chris Brown.",
          html: "https://www.shazam.com/snippets/email-share/498502624?lang=en&country=GB",
          avatar:
            "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/54/ca/43/54ca4321-8c0b-099e-f552-950a40a2a899/pr_source.png/800x800cc.jpg",
          snapchat: "https://www.shazam.com/partner/sc/track/498502624",
        },
        images: {
          background:
            "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/54/ca/43/54ca4321-8c0b-099e-f552-950a40a2a899/pr_source.png/800x800cc.jpg",
          coverart:
            "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/97/ec/96/97ec963b-8829-f040-fe40-508069d6044b/196589418449.jpg/400x400cc.jpg",
          coverarthq:
            "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/97/ec/96/97ec963b-8829-f040-fe40-508069d6044b/196589418449.jpg/400x400cc.jpg",
          joecolor: "b:000000p:ffffffs:f63710t:cbcbcbq:c42c0d",
        },
        hub: {
          type: "APPLEMUSIC",
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
          actions: [
            {
              name: "apple",
              type: "applemusicplay",
              id: "1643756110",
            },
            {
              name: "apple",
              type: "uri",
              uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/87/a2/c8/87a2c876-dfbd-a57e-2c13-dbd6fc3cba77/mzaf_4085762200601715015.plus.aac.ep.m4a",
            },
          ],
          options: [
            {
              caption: "OPEN",
              actions: [
                {
                  name: "hub:applemusic:deeplink",
                  type: "applemusicopen",
                  uri: "https://music.apple.com/gb/album/under-the-influence/1643755888?i=1643756110&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
                {
                  name: "hub:applemusic:deeplink",
                  type: "uri",
                  uri: "https://music.apple.com/gb/album/under-the-influence/1643755888?i=1643756110&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
              ],
              beacondata: {
                type: "open",
                providername: "applemusic",
              },
              image:
                "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
              type: "open",
              listcaption: "Open in Apple Music",
              overflowimage:
                "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
              colouroverflowimage: false,
              providername: "applemusic",
            },
          ],
          explicit: true,
          displayname: "APPLE MUSIC",
        },
        artists: [
          {
            alias: "chris-brown",
            id: "42",
            adamid: "95705522",
          },
        ],
        url: "https://www.shazam.com/track/498502624/under-the-influence",
        highlightsurls: {},
        properties: {},
      },
      {
        layout: "5",
        type: "MUSIC",
        key: "601555046",
        title: "Calm Down",
        subtitle: "Rema",
        share: {
          subject: "Calm Down - Rema",
          text: "I used Shazam to discover Calm Down by Rema.",
          href: "https://www.shazam.com/track/601555046/calm-down",
          image:
            "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/b2/b4/7c/b2b47cf9-d8e2-53f6-5c62-c974d665c95b/22UMGIM08994.rgb.jpg/400x400cc.jpg",
          twitter: "I used @Shazam to discover Calm Down by Rema.",
          html: "https://www.shazam.com/snippets/email-share/601555046?lang=en&country=GB",
          avatar:
            "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/23/24/4c/23244c02-6e19-ffa8-6bf1-01170fe9091a/17ea45ee-4d29-478a-87cd-f8d97fbc88c9_ami-identity-9e987f39368f9dd37966c136969aac14-2022-10-10T10-11-43.274Z_cropped.png/800x800cc.jpg",
          snapchat: "https://www.shazam.com/partner/sc/track/601555046",
        },
        images: {
          background:
            "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/23/24/4c/23244c02-6e19-ffa8-6bf1-01170fe9091a/17ea45ee-4d29-478a-87cd-f8d97fbc88c9_ami-identity-9e987f39368f9dd37966c136969aac14-2022-10-10T10-11-43.274Z_cropped.png/800x800cc.jpg",
          coverart:
            "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/b2/b4/7c/b2b47cf9-d8e2-53f6-5c62-c974d665c95b/22UMGIM08994.rgb.jpg/400x400cc.jpg",
          coverarthq:
            "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/b2/b4/7c/b2b47cf9-d8e2-53f6-5c62-c974d665c95b/22UMGIM08994.rgb.jpg/400x400cc.jpg",
          joecolor: "b:f7f1d1p:020000s:1f1909t:333029q:4a4431",
        },
        hub: {
          type: "APPLEMUSIC",
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
          actions: [
            {
              name: "apple",
              type: "applemusicplay",
              id: "1614063459",
            },
            {
              name: "apple",
              type: "uri",
              uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/70/9f/c7/709fc7e3-8e43-4b42-4f6e-c9f0a94842ce/mzaf_8187227090010990098.plus.aac.ep.m4a",
            },
          ],
          options: [
            {
              caption: "OPEN",
              actions: [
                {
                  name: "hub:applemusic:deeplink",
                  type: "applemusicopen",
                  uri: "https://music.apple.com/gb/album/calm-down/1614063395?i=1614063459&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
                {
                  name: "hub:applemusic:deeplink",
                  type: "uri",
                  uri: "https://music.apple.com/gb/album/calm-down/1614063395?i=1614063459&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
              ],
              beacondata: {
                type: "open",
                providername: "applemusic",
              },
              image:
                "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
              type: "open",
              listcaption: "Open in Apple Music",
              overflowimage:
                "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
              colouroverflowimage: false,
              providername: "applemusic",
            },
          ],
          explicit: false,
          displayname: "APPLE MUSIC",
        },
        artists: [
          {
            alias: "rema",
            id: "42",
            adamid: "1304716885",
          },
        ],
        url: "https://www.shazam.com/track/601555046/calm-down",
        highlightsurls: {},
        properties: {},
      },
      {
        layout: "5",
        type: "MUSIC",
        key: "607917333",
        title: "SNAP",
        subtitle: "Rosa Linn",
        share: {
          subject: "SNAP - Rosa Linn",
          text: "I used Shazam to discover SNAP by Rosa Linn.",
          href: "https://www.shazam.com/track/607917333/snap",
          image:
            "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/e6/f7/26/e6f726ab-1827-dec4-1613-394b537db8e4/196589496959.jpg/400x400cc.jpg",
          twitter: "I used @Shazam to discover SNAP by Rosa Linn.",
          html: "https://www.shazam.com/snippets/email-share/607917333?lang=en&country=GB",
          avatar:
            "https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/75/4c/3b/754c3b37-5a16-c203-f6f6-ff5c3ddfa93e/pr_source.png/800x800cc.jpg",
          snapchat: "https://www.shazam.com/partner/sc/track/607917333",
        },
        images: {
          background:
            "https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/75/4c/3b/754c3b37-5a16-c203-f6f6-ff5c3ddfa93e/pr_source.png/800x800cc.jpg",
          coverart:
            "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/e6/f7/26/e6f726ab-1827-dec4-1613-394b537db8e4/196589496959.jpg/400x400cc.jpg",
          coverarthq:
            "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/e6/f7/26/e6f726ab-1827-dec4-1613-394b537db8e4/196589496959.jpg/400x400cc.jpg",
          joecolor: "b:f3f0ebp:2d2526s:382a2at:554d4dq:5d5251",
        },
        hub: {
          type: "APPLEMUSIC",
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
          actions: [
            {
              name: "apple",
              type: "applemusicplay",
              id: "1646526227",
            },
            {
              name: "apple",
              type: "uri",
              uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/6e/2b/f3/6e2bf33f-08c9-6286-b8c0-b7e7b8630d1b/mzaf_11852854497905823862.plus.aac.ep.m4a",
            },
          ],
          options: [
            {
              caption: "OPEN",
              actions: [
                {
                  name: "hub:applemusic:deeplink",
                  type: "applemusicopen",
                  uri: "https://music.apple.com/gb/album/snap/1646526226?i=1646526227&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
                {
                  name: "hub:applemusic:deeplink",
                  type: "uri",
                  uri: "https://music.apple.com/gb/album/snap/1646526226?i=1646526227&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
              ],
              beacondata: {
                type: "open",
                providername: "applemusic",
              },
              image:
                "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
              type: "open",
              listcaption: "Open in Apple Music",
              overflowimage:
                "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
              colouroverflowimage: false,
              providername: "applemusic",
            },
          ],
          explicit: false,
          displayname: "APPLE MUSIC",
        },
        artists: [
          {
            alias: "rosa-linn",
            id: "42",
            adamid: "1580652660",
          },
        ],
        url: "https://www.shazam.com/track/607917333/snap",
        highlightsurls: {},
        properties: {},
      },
      {
        layout: "5",
        type: "MUSIC",
        key: "636221067",
        title: "Cough (Odo)",
        subtitle: "Kiss Daniel",
        share: {
          subject: "Cough (Odo) - Kiss Daniel",
          text: "I used Shazam to discover Cough (Odo) by Kiss Daniel.",
          href: "https://www.shazam.com/track/636221067/cough-odo",
          image:
            "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/31/11/04/311104be-b005-dc8c-d575-cf7627c285c7/artwork.jpg/400x400cc.jpg",
          twitter: "I used @Shazam to discover Cough (Odo) by Kiss Daniel.",
          html: "https://www.shazam.com/snippets/email-share/636221067?lang=en&country=GB",
          snapchat: "https://www.shazam.com/partner/sc/track/636221067",
        },
        images: {
          background:
            "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/31/11/04/311104be-b005-dc8c-d575-cf7627c285c7/artwork.jpg/400x400cc.jpg",
          coverart:
            "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/31/11/04/311104be-b005-dc8c-d575-cf7627c285c7/artwork.jpg/400x400cc.jpg",
          coverarthq:
            "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/31/11/04/311104be-b005-dc8c-d575-cf7627c285c7/artwork.jpg/400x400cc.jpg",
          joecolor: "b:fffdf0p:070503s:2c2c28t:383732q:565650",
        },
        hub: {
          type: "APPLEMUSIC",
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
          actions: [
            {
              name: "apple",
              type: "applemusicplay",
              id: "1651778963",
            },
            {
              name: "apple",
              type: "uri",
              uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/11/89/4a/11894a66-5326-e142-8952-8e029160fcc1/mzaf_11132190584700256131.plus.aac.ep.m4a",
            },
          ],
          options: [
            {
              caption: "OPEN",
              actions: [
                {
                  name: "hub:applemusic:deeplink",
                  type: "applemusicopen",
                  uri: "https://music.apple.com/gb/album/cough-odo/1651778962?i=1651778963&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
                {
                  name: "hub:applemusic:deeplink",
                  type: "uri",
                  uri: "https://music.apple.com/gb/album/cough-odo/1651778962?i=1651778963&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
              ],
              beacondata: {
                type: "open",
                providername: "applemusic",
              },
              image:
                "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
              type: "open",
              listcaption: "Open in Apple Music",
              overflowimage:
                "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
              colouroverflowimage: false,
              providername: "applemusic",
            },
          ],
          explicit: false,
          displayname: "APPLE MUSIC",
        },
        artists: [
          {
            alias: "kiss-daniel",
            id: "42",
            adamid: "1651751545",
          },
        ],
        url: "https://www.shazam.com/track/636221067/cough-odo",
        highlightsurls: {},
        properties: {},
      },
      {
        layout: "5",
        type: "MUSIC",
        key: "40590926",
        title: "Mockingbird",
        subtitle: "Eminem",
        share: {
          subject: "Mockingbird - Eminem",
          text: "I used Shazam to discover Mockingbird by Eminem.",
          href: "https://www.shazam.com/track/40590926/mockingbird",
          image:
            "https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/99/4a/a6/994aa6ee-8232-c580-a7a4-1d4dfd602511/00602498648841.rgb.jpg/400x400cc.jpg",
          twitter: "I used @Shazam to discover Mockingbird by Eminem.",
          html: "https://www.shazam.com/snippets/email-share/40590926?lang=en&country=GB",
          avatar:
            "https://is2-ssl.mzstatic.com/image/thumb/Features115/v4/87/8e/a0/878ea0a1-ed8d-6fd7-3567-76ab8e6529af/mzl.ayuccyos.jpg/800x800cc.jpg",
          snapchat: "https://www.shazam.com/partner/sc/track/40590926",
        },
        images: {
          background:
            "https://is2-ssl.mzstatic.com/image/thumb/Features115/v4/87/8e/a0/878ea0a1-ed8d-6fd7-3567-76ab8e6529af/mzl.ayuccyos.jpg/800x800cc.jpg",
          coverart:
            "https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/99/4a/a6/994aa6ee-8232-c580-a7a4-1d4dfd602511/00602498648841.rgb.jpg/400x400cc.jpg",
          coverarthq:
            "https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/99/4a/a6/994aa6ee-8232-c580-a7a4-1d4dfd602511/00602498648841.rgb.jpg/400x400cc.jpg",
          joecolor: "b:000219p:fefefes:cac9ddt:cbcbd0q:a2a1b5",
        },
        hub: {
          type: "APPLEMUSIC",
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
          actions: [
            {
              name: "apple",
              type: "applemusicplay",
              id: "1440751633",
            },
            {
              name: "apple",
              type: "uri",
              uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/65/c6/15/65c61537-1c2f-e2bd-0f26-2ed9818fb86f/mzaf_9317418265960662555.plus.aac.ep.m4a",
            },
          ],
          options: [
            {
              caption: "OPEN",
              actions: [
                {
                  name: "hub:applemusic:deeplink",
                  type: "applemusicopen",
                  uri: "https://music.apple.com/gb/album/mockingbird/1440751265?i=1440751633&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
                {
                  name: "hub:applemusic:deeplink",
                  type: "uri",
                  uri: "https://music.apple.com/gb/album/mockingbird/1440751265?i=1440751633&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
              ],
              beacondata: {
                type: "open",
                providername: "applemusic",
              },
              image:
                "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
              type: "open",
              listcaption: "Open in Apple Music",
              overflowimage:
                "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
              colouroverflowimage: false,
              providername: "applemusic",
            },
          ],
          explicit: true,
          displayname: "APPLE MUSIC",
        },
        artists: [
          {
            alias: "eminem",
            id: "42",
            adamid: "111051",
          },
        ],
        url: "https://www.shazam.com/track/40590926/mockingbird",
        highlightsurls: {},
        properties: {},
      },
      {
        layout: "5",
        type: "MUSIC",
        key: "630520607",
        title: "STAR WALKIN' (League of Legends Worlds Anthem)",
        subtitle: "Lil Nas X",
        share: {
          subject: "STAR WALKIN' (League of Legends Worlds Anthem) - Lil Nas X",
          text: "I used Shazam to discover STAR WALKIN' (League of Legends Worlds Anthem) by Lil Nas X.",
          href: "https://www.shazam.com/track/630520607/star-walkin-league-of-legends-worlds-anthem",
          image:
            "https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/ba/4c/c4/ba4cc4e4-50e5-04f8-b865-389fdf0dfc38/dj.vdbsglhz.jpg/400x400cc.jpg",
          twitter:
            "I used @Shazam to discover STAR WALKIN' (League of Legends Worlds Anthem) by Lil Nas X.",
          html: "https://www.shazam.com/snippets/email-share/630520607?lang=en&country=GB",
          avatar:
            "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/cc/71/d7/cc71d772-a807-6943-b4e2-c1b92b7b99b8/pr_source.png/800x800cc.jpg",
          snapchat: "https://www.shazam.com/partner/sc/track/630520607",
        },
        images: {
          background:
            "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/cc/71/d7/cc71d772-a807-6943-b4e2-c1b92b7b99b8/pr_source.png/800x800cc.jpg",
          coverart:
            "https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/ba/4c/c4/ba4cc4e4-50e5-04f8-b865-389fdf0dfc38/dj.vdbsglhz.jpg/400x400cc.jpg",
          coverarthq:
            "https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/ba/4c/c4/ba4cc4e4-50e5-04f8-b865-389fdf0dfc38/dj.vdbsglhz.jpg/400x400cc.jpg",
          joecolor: "b:805c39p:f3f1d8s:d4ecdet:dcd3b8q:c3cfbd",
        },
        hub: {
          type: "APPLEMUSIC",
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
          actions: [
            {
              name: "apple",
              type: "applemusicplay",
              id: "1642613664",
            },
            {
              name: "apple",
              type: "uri",
              uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/6d/4b/66/6d4b6697-57ec-f34c-a56d-53c7fe48acea/mzaf_14430168494514608993.plus.aac.ep.m4a",
            },
          ],
          options: [
            {
              caption: "OPEN",
              actions: [
                {
                  name: "hub:applemusic:deeplink",
                  type: "applemusicopen",
                  uri: "https://music.apple.com/gb/album/star-walkin-league-of-legends-worlds-anthem/1642613175?i=1642613664&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
                {
                  name: "hub:applemusic:deeplink",
                  type: "uri",
                  uri: "https://music.apple.com/gb/album/star-walkin-league-of-legends-worlds-anthem/1642613175?i=1642613664&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
              ],
              beacondata: {
                type: "open",
                providername: "applemusic",
              },
              image:
                "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
              type: "open",
              listcaption: "Open in Apple Music",
              overflowimage:
                "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
              colouroverflowimage: false,
              providername: "applemusic",
            },
          ],
          explicit: true,
          displayname: "APPLE MUSIC",
        },
        artists: [
          {
            alias: "lil-nas-x",
            id: "42",
            adamid: "1400730578",
          },
        ],
        url: "https://www.shazam.com/track/630520607/star-walkin-league-of-legends-worlds-anthem",
        highlightsurls: {},
        properties: {},
      },
      {
        layout: "5",
        type: "MUSIC",
        key: "614204083",
        title: "I Ain't Worried",
        subtitle: "OneRepublic",
        share: {
          subject: "I Ain't Worried - OneRepublic",
          text: "I used Shazam to discover I Ain't Worried by OneRepublic.",
          href: "https://www.shazam.com/track/614204083/i-aint-worried",
          image:
            "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/e6/14/14/e6141444-6597-4c3a-7ad1-86304528acf4/22UMGIM45569.rgb.jpg/400x400cc.jpg",
          twitter: "I used @Shazam to discover I Ain't Worried by OneRepublic.",
          html: "https://www.shazam.com/snippets/email-share/614204083?lang=en&country=GB",
          avatar:
            "https://is3-ssl.mzstatic.com/image/thumb/Music126/v4/cc/0e/16/cc0e16cd-642c-001f-180c-9d6e6080d5c7/pr_source.png/800x800cc.jpg",
          snapchat: "https://www.shazam.com/partner/sc/track/614204083",
        },
        images: {
          background:
            "https://is3-ssl.mzstatic.com/image/thumb/Music126/v4/cc/0e/16/cc0e16cd-642c-001f-180c-9d6e6080d5c7/pr_source.png/800x800cc.jpg",
          coverart:
            "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/e6/14/14/e6141444-6597-4c3a-7ad1-86304528acf4/22UMGIM45569.rgb.jpg/400x400cc.jpg",
          coverarthq:
            "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/e6/14/14/e6141444-6597-4c3a-7ad1-86304528acf4/22UMGIM45569.rgb.jpg/400x400cc.jpg",
          joecolor: "b:1f1303p:f6e7a8s:f8e193t:cbbd87q:ccb876",
        },
        hub: {
          type: "APPLEMUSIC",
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
          actions: [
            {
              name: "apple",
              type: "applemusicplay",
              id: "1621817894",
            },
            {
              name: "apple",
              type: "uri",
              uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/5c/f0/8a/5cf08acf-596f-c264-affa-9c387a7410e8/mzaf_2952444090080507083.plus.aac.p.m4a",
            },
          ],
          options: [
            {
              caption: "OPEN",
              actions: [
                {
                  name: "hub:applemusic:deeplink",
                  type: "applemusicopen",
                  uri: "https://music.apple.com/gb/album/i-aint-worried/1621817793?i=1621817894&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
                {
                  name: "hub:applemusic:deeplink",
                  type: "uri",
                  uri: "https://music.apple.com/gb/album/i-aint-worried/1621817793?i=1621817894&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
              ],
              beacondata: {
                type: "open",
                providername: "applemusic",
              },
              image:
                "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
              type: "open",
              listcaption: "Open in Apple Music",
              overflowimage:
                "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
              colouroverflowimage: false,
              providername: "applemusic",
            },
          ],
          explicit: false,
          displayname: "APPLE MUSIC",
        },
        artists: [
          {
            alias: "onerepublic",
            id: "42",
            adamid: "260414340",
          },
        ],
        url: "https://www.shazam.com/track/614204083/i-aint-worried",
        highlightsurls: {},
        properties: {},
      },
      {
        layout: "5",
        type: "MUSIC",
        key: "619940012",
        title: "CUFF IT",
        subtitle: "Beyoncé",
        share: {
          subject: "CUFF IT - Beyoncé",
          text: "I used Shazam to discover CUFF IT by Beyoncé.",
          href: "https://www.shazam.com/track/619940012/cuff-it",
          image:
            "https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/05/05/f3/0505f338-9873-feb4-af7f-27a470405e5f/196589246974.jpg/400x400cc.jpg",
          twitter: "I used @Shazam to discover CUFF IT by Beyoncé.",
          html: "https://www.shazam.com/snippets/email-share/619940012?lang=en&country=GB",
          avatar:
            "https://is5-ssl.mzstatic.com/image/thumb/Features122/v4/e2/10/a7/e210a754-3409-4e42-8fd9-413c1289cbb9/mza_3319038547447377908.png/800x800cc.jpg",
          snapchat: "https://www.shazam.com/partner/sc/track/619940012",
        },
        images: {
          background:
            "https://is5-ssl.mzstatic.com/image/thumb/Features122/v4/e2/10/a7/e210a754-3409-4e42-8fd9-413c1289cbb9/mza_3319038547447377908.png/800x800cc.jpg",
          coverart:
            "https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/05/05/f3/0505f338-9873-feb4-af7f-27a470405e5f/196589246974.jpg/400x400cc.jpg",
          coverarthq:
            "https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/05/05/f3/0505f338-9873-feb4-af7f-27a470405e5f/196589246974.jpg/400x400cc.jpg",
          joecolor: "b:000000p:f9f7f8s:d7eaf5t:c7c6c6q:acbbc4",
        },
        hub: {
          type: "APPLEMUSIC",
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
          actions: [
            {
              name: "apple",
              type: "applemusicplay",
              id: "1630005850",
            },
            {
              name: "apple",
              type: "uri",
              uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/de/0c/d1/de0cd1b7-869d-2552-2693-86e7372f1722/mzaf_9356701807147985180.plus.aac.ep.m4a",
            },
          ],
          options: [
            {
              caption: "OPEN",
              actions: [
                {
                  name: "hub:applemusic:deeplink",
                  type: "applemusicopen",
                  uri: "https://music.apple.com/gb/album/cuff-it/1630005298?i=1630005850&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
                {
                  name: "hub:applemusic:deeplink",
                  type: "uri",
                  uri: "https://music.apple.com/gb/album/cuff-it/1630005298?i=1630005850&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
              ],
              beacondata: {
                type: "open",
                providername: "applemusic",
              },
              image:
                "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
              type: "open",
              listcaption: "Open in Apple Music",
              overflowimage:
                "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
              colouroverflowimage: false,
              providername: "applemusic",
            },
          ],
          explicit: true,
          displayname: "APPLE MUSIC",
        },
        artists: [
          {
            alias: "beyonc%C3%A9",
            id: "42",
            adamid: "1419227",
          },
        ],
        url: "https://www.shazam.com/track/619940012/cuff-it",
        highlightsurls: {},
        properties: {},
      },
      {
        layout: "5",
        type: "MUSIC",
        key: "70679146",
        title: "Another Love",
        subtitle: "Tom Odell",
        share: {
          subject: "Another Love - Tom Odell",
          text: "I used Shazam to discover Another Love by Tom Odell.",
          href: "https://www.shazam.com/track/70679146/another-love",
          image:
            "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/f6/2f/c1/f62fc1e3-ac6b-0009-8d3b-52d74821ad53/886443847828.jpg/400x400cc.jpg",
          twitter: "I used @Shazam to discover Another Love by Tom Odell.",
          html: "https://www.shazam.com/snippets/email-share/70679146?lang=en&country=GB",
          avatar:
            "https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/47/4f/7e/474f7ebe-1442-1dd2-ed17-78808b521f08/pr_source.png/800x800cc.jpg",
          snapchat: "https://www.shazam.com/partner/sc/track/70679146",
        },
        images: {
          background:
            "https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/47/4f/7e/474f7ebe-1442-1dd2-ed17-78808b521f08/pr_source.png/800x800cc.jpg",
          coverart:
            "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/f6/2f/c1/f62fc1e3-ac6b-0009-8d3b-52d74821ad53/886443847828.jpg/400x400cc.jpg",
          coverarthq:
            "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/f6/2f/c1/f62fc1e3-ac6b-0009-8d3b-52d74821ad53/886443847828.jpg/400x400cc.jpg",
          joecolor: "b:aba7a4p:080a0ds:06171et:292a2bq:273439",
        },
        hub: {
          type: "APPLEMUSIC",
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
          actions: [
            {
              name: "apple",
              type: "applemusicplay",
              id: "608400089",
            },
            {
              name: "apple",
              type: "uri",
              uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/72/c5/96/72c596bb-0161-f51d-5779-d8c5c823fabc/mzaf_4624172607665711755.plus.aac.ep.m4a",
            },
          ],
          options: [
            {
              caption: "OPEN",
              actions: [
                {
                  name: "hub:applemusic:deeplink",
                  type: "applemusicopen",
                  uri: "https://music.apple.com/gb/album/another-love/608399874?i=608400089&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
                {
                  name: "hub:applemusic:deeplink",
                  type: "uri",
                  uri: "https://music.apple.com/gb/album/another-love/608399874?i=608400089&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
              ],
              beacondata: {
                type: "open",
                providername: "applemusic",
              },
              image:
                "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
              type: "open",
              listcaption: "Open in Apple Music",
              overflowimage:
                "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
              colouroverflowimage: false,
              providername: "applemusic",
            },
          ],
          explicit: true,
          displayname: "APPLE MUSIC",
        },
        artists: [
          {
            alias: "tom-odell",
            id: "42",
            adamid: "524929515",
          },
        ],
        url: "https://www.shazam.com/track/70679146/another-love",
        highlightsurls: {},
        properties: {},
      },
      {
        layout: "5",
        type: "MUSIC",
        key: "622105075",
        title: "Quevedo: Bzrp Music Sessions, Vol. 52",
        subtitle: "Bizarrap & Quevedo",
        share: {
          subject: "Quevedo: Bzrp Music Sessions, Vol. 52 - Bizarrap & Quevedo",
          text: "I used Shazam to discover Quevedo: Bzrp Music Sessions, Vol. 52 by Bizarrap & Quevedo.",
          href: "https://www.shazam.com/track/622105075/quevedo-bzrp-music-sessions-vol-52",
          image:
            "https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/74/37/3d/74373d24-e999-ea75-e101-b9b21b3887c3/196925240499.jpg/400x400cc.jpg",
          twitter:
            "I used @Shazam to discover Quevedo: Bzrp Music Sessions, Vol. 52 by Bizarrap & Quevedo.",
          html: "https://www.shazam.com/snippets/email-share/622105075?lang=en&country=GB",
          avatar:
            "https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/5a/0d/e5/5a0de5fb-7d27-d211-10a2-337687801092/pr_source.png/800x800cc.jpg",
          snapchat: "https://www.shazam.com/partner/sc/track/622105075",
        },
        images: {
          background:
            "https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/5a/0d/e5/5a0de5fb-7d27-d211-10a2-337687801092/pr_source.png/800x800cc.jpg",
          coverart:
            "https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/74/37/3d/74373d24-e999-ea75-e101-b9b21b3887c3/196925240499.jpg/400x400cc.jpg",
          coverarthq:
            "https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/74/37/3d/74373d24-e999-ea75-e101-b9b21b3887c3/196925240499.jpg/400x400cc.jpg",
          joecolor: "b:000000p:faf9f5s:bcc2c1t:c8c7c4q:969b9a",
        },
        hub: {
          type: "APPLEMUSIC",
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
          actions: [
            {
              name: "apple",
              type: "applemusicplay",
              id: "1632746802",
            },
            {
              name: "apple",
              type: "uri",
              uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/0c/62/9e/0c629e98-c1b7-b9f7-5e3b-50d83afefd62/mzaf_8347361243339584774.plus.aac.ep.m4a",
            },
          ],
          options: [
            {
              caption: "OPEN",
              actions: [
                {
                  name: "hub:applemusic:deeplink",
                  type: "applemusicopen",
                  uri: "https://music.apple.com/gb/album/quevedo-bzrp-music-sessions-vol-52/1632746799?i=1632746802&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
                {
                  name: "hub:applemusic:deeplink",
                  type: "uri",
                  uri: "https://music.apple.com/gb/album/quevedo-bzrp-music-sessions-vol-52/1632746799?i=1632746802&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
              ],
              beacondata: {
                type: "open",
                providername: "applemusic",
              },
              image:
                "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
              type: "open",
              listcaption: "Open in Apple Music",
              overflowimage:
                "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
              colouroverflowimage: false,
              providername: "applemusic",
            },
          ],
          explicit: false,
          displayname: "APPLE MUSIC",
        },
        artists: [
          {
            alias: "bizarrap",
            id: "42",
            adamid: "1239658213",
          },
          {
            alias: "quevedo",
            id: "42",
            adamid: "377761784",
          },
        ],
        url: "https://www.shazam.com/track/622105075/quevedo-bzrp-music-sessions-vol-52",
        highlightsurls: {},
        properties: {},
      },
      {
        layout: "5",
        type: "MUSIC",
        key: "633467896",
        title: "Anti-Hero",
        subtitle: "Taylor Swift",
        share: {
          subject: "Anti-Hero - Taylor Swift",
          text: "I used Shazam to discover Anti-Hero by Taylor Swift.",
          href: "https://www.shazam.com/track/633467896/anti-hero",
          image:
            "https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/11/33/de/1133deee-070e-98d3-950a-2269807b074e/22UM1IM24801.rgb.jpg/400x400cc.jpg",
          twitter: "I used @Shazam to discover Anti-Hero by Taylor Swift.",
          html: "https://www.shazam.com/snippets/email-share/633467896?lang=en&country=GB",
          avatar:
            "https://is4-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/a0/4f/3e/a04f3ec4-4476-1a80-6a3e-6b3641251099/8988402d-d267-4dee-bc51-881135b2ab58_ami-identity-994af5c375f4c3aa96cd6ced4a700799-2022-10-12T00-51-40.037Z_cropped.png/800x800cc.jpg",
          snapchat: "https://www.shazam.com/partner/sc/track/633467896",
        },
        images: {
          background:
            "https://is4-ssl.mzstatic.com/image/thumb/AMCArtistImages112/v4/a0/4f/3e/a04f3ec4-4476-1a80-6a3e-6b3641251099/8988402d-d267-4dee-bc51-881135b2ab58_ami-identity-994af5c375f4c3aa96cd6ced4a700799-2022-10-12T00-51-40.037Z_cropped.png/800x800cc.jpg",
          coverart:
            "https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/11/33/de/1133deee-070e-98d3-950a-2269807b074e/22UM1IM24801.rgb.jpg/400x400cc.jpg",
          coverarthq:
            "https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/11/33/de/1133deee-070e-98d3-950a-2269807b074e/22UM1IM24801.rgb.jpg/400x400cc.jpg",
          joecolor: "b:eae7e2p:120b14s:412423t:3d373dq:634b49",
        },
        hub: {
          type: "APPLEMUSIC",
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
          actions: [
            {
              name: "apple",
              type: "applemusicplay",
              id: "1645937257",
            },
            {
              name: "apple",
              type: "uri",
              uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/0e/72/26/0e722602-1a42-cb6f-be43-8b83f8cc4925/mzaf_2139607749166804323.plus.aac.ep.m4a",
            },
          ],
          options: [
            {
              caption: "OPEN",
              actions: [
                {
                  name: "hub:applemusic:deeplink",
                  type: "applemusicopen",
                  uri: "https://music.apple.com/gb/album/anti-hero/1645937249?i=1645937257&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
                {
                  name: "hub:applemusic:deeplink",
                  type: "uri",
                  uri: "https://music.apple.com/gb/album/anti-hero/1645937249?i=1645937257&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
              ],
              beacondata: {
                type: "open",
                providername: "applemusic",
              },
              image:
                "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
              type: "open",
              listcaption: "Open in Apple Music",
              overflowimage:
                "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
              colouroverflowimage: false,
              providername: "applemusic",
            },
          ],
          explicit: false,
          displayname: "APPLE MUSIC",
        },
        artists: [
          {
            alias: "taylor-swift",
            id: "42",
            adamid: "159260351",
          },
        ],
        url: "https://www.shazam.com/track/633467896/anti-hero",
        highlightsurls: {},
        properties: {},
      },
      {
        layout: "5",
        type: "MUSIC",
        key: "629204672",
        title: "Hold Me Closer",
        subtitle: "Elton John & Britney Spears",
        share: {
          subject: "Hold Me Closer - Elton John & Britney Spears",
          text: "I used Shazam to discover Hold Me Closer by Elton John & Britney Spears.",
          href: "https://www.shazam.com/track/629204672/hold-me-closer",
          image:
            "https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/04/be/81/04be81e8-9cb9-f8a2-6201-9741404cb775/21UMGIM74865.rgb.jpg/400x400cc.jpg",
          twitter:
            "I used @Shazam to discover Hold Me Closer by Elton John & Britney Spears.",
          html: "https://www.shazam.com/snippets/email-share/629204672?lang=en&country=GB",
          avatar:
            "https://is2-ssl.mzstatic.com/image/thumb/Features125/v4/22/7a/b7/227ab79d-8c57-3622-f414-ba2e83252ee5/mzl.qlkmclct.jpg/800x800cc.jpg",
          snapchat: "https://www.shazam.com/partner/sc/track/629204672",
        },
        images: {
          background:
            "https://is2-ssl.mzstatic.com/image/thumb/Features125/v4/22/7a/b7/227ab79d-8c57-3622-f414-ba2e83252ee5/mzl.qlkmclct.jpg/800x800cc.jpg",
          coverart:
            "https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/04/be/81/04be81e8-9cb9-f8a2-6201-9741404cb775/21UMGIM74865.rgb.jpg/400x400cc.jpg",
          coverarthq:
            "https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/04/be/81/04be81e8-9cb9-f8a2-6201-9741404cb775/21UMGIM74865.rgb.jpg/400x400cc.jpg",
          joecolor: "b:241615p:ffc373s:d8adbft:d3a060q:b48f9d",
        },
        hub: {
          type: "APPLEMUSIC",
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
          actions: [
            {
              name: "apple",
              type: "applemusicplay",
              id: "1646994694",
            },
            {
              name: "apple",
              type: "uri",
              uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/a8/34/5b/a8345bc5-f5fe-27ca-1aa8-4a002c997b0a/mzaf_1150788719623102133.plus.aac.ep.m4a",
            },
          ],
          options: [
            {
              caption: "OPEN",
              actions: [
                {
                  name: "hub:applemusic:deeplink",
                  type: "applemusicopen",
                  uri: "https://music.apple.com/gb/album/hold-me-closer/1646994693?i=1646994694&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
                {
                  name: "hub:applemusic:deeplink",
                  type: "uri",
                  uri: "https://music.apple.com/gb/album/hold-me-closer/1646994693?i=1646994694&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
              ],
              beacondata: {
                type: "open",
                providername: "applemusic",
              },
              image:
                "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
              type: "open",
              listcaption: "Open in Apple Music",
              overflowimage:
                "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
              colouroverflowimage: false,
              providername: "applemusic",
            },
          ],
          explicit: false,
          displayname: "APPLE MUSIC",
        },
        artists: [
          {
            alias: "elton-john",
            id: "42",
            adamid: "54657",
          },
          {
            alias: "britney-spears",
            id: "42",
            adamid: "217005",
          },
        ],
        url: "https://www.shazam.com/track/629204672/hold-me-closer",
        highlightsurls: {},
        properties: {},
      },
      {
        layout: "5",
        type: "MUSIC",
        key: "629608451",
        title: "Rush",
        subtitle: "Ayra Starr",
        share: {
          subject: "Rush - Ayra Starr",
          text: "I used Shazam to discover Rush by Ayra Starr.",
          href: "https://www.shazam.com/track/629608451/rush",
          image:
            "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/b2/af/f2/b2aff242-703a-2d9d-7146-bbf487fe9a49/5059449090122.png/400x400cc.jpg",
          twitter: "I used @Shazam to discover Rush by Ayra Starr.",
          html: "https://www.shazam.com/snippets/email-share/629608451?lang=en&country=GB",
          avatar:
            "https://is3-ssl.mzstatic.com/image/thumb/Music122/v4/44/de/57/44de5739-5e3f-a831-6c1a-289ec3b667ee/pr_source.png/800x800cc.jpg",
          snapchat: "https://www.shazam.com/partner/sc/track/629608451",
        },
        images: {
          background:
            "https://is3-ssl.mzstatic.com/image/thumb/Music122/v4/44/de/57/44de5739-5e3f-a831-6c1a-289ec3b667ee/pr_source.png/800x800cc.jpg",
          coverart:
            "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/b2/af/f2/b2aff242-703a-2d9d-7146-bbf487fe9a49/5059449090122.png/400x400cc.jpg",
          coverarthq:
            "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/b2/af/f2/b2aff242-703a-2d9d-7146-bbf487fe9a49/5059449090122.png/400x400cc.jpg",
          joecolor: "b:0f1f1ep:f7d55cs:f27e27t:c8b04fq:c56b25",
        },
        hub: {
          type: "APPLEMUSIC",
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
          actions: [
            {
              name: "apple",
              type: "applemusicplay",
              id: "1642898573",
            },
            {
              name: "apple",
              type: "uri",
              uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/74/b4/ce/74b4cefd-7bb0-27f1-70d8-d8ce05a720ef/mzaf_14315726628197405332.plus.aac.ep.m4a",
            },
          ],
          options: [
            {
              caption: "OPEN",
              actions: [
                {
                  name: "hub:applemusic:deeplink",
                  type: "applemusicopen",
                  uri: "https://music.apple.com/gb/album/rush/1642898371?i=1642898573&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
                {
                  name: "hub:applemusic:deeplink",
                  type: "uri",
                  uri: "https://music.apple.com/gb/album/rush/1642898371?i=1642898573&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
              ],
              beacondata: {
                type: "open",
                providername: "applemusic",
              },
              image:
                "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
              type: "open",
              listcaption: "Open in Apple Music",
              overflowimage:
                "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
              colouroverflowimage: false,
              providername: "applemusic",
            },
          ],
          explicit: false,
          displayname: "APPLE MUSIC",
        },
        artists: [
          {
            alias: "ayra-starr",
            id: "42",
            adamid: "1536429348",
          },
        ],
        url: "https://www.shazam.com/track/629608451/rush",
        highlightsurls: {},
        properties: {},
      },
      {
        layout: "5",
        type: "MUSIC",
        key: "609260140",
        title: "As It Was",
        subtitle: "Harry Styles",
        share: {
          subject: "As It Was - Harry Styles",
          text: "I used Shazam to discover As It Was by Harry Styles.",
          href: "https://www.shazam.com/track/609260140/as-it-was",
          image:
            "https://is4-ssl.mzstatic.com/image/thumb/Music126/v4/2a/19/fb/2a19fb85-2f70-9e44-f2a9-82abe679b88e/886449990061.jpg/400x400cc.jpg",
          twitter: "I used @Shazam to discover As It Was by Harry Styles.",
          html: "https://www.shazam.com/snippets/email-share/609260140?lang=en&country=GB",
          avatar:
            "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/00/8f/26/008f26ce-ec78-ad42-9303-260ac3b9701c/pr_source.png/800x800cc.jpg",
          snapchat: "https://www.shazam.com/partner/sc/track/609260140",
        },
        images: {
          background:
            "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/00/8f/26/008f26ce-ec78-ad42-9303-260ac3b9701c/pr_source.png/800x800cc.jpg",
          coverart:
            "https://is4-ssl.mzstatic.com/image/thumb/Music126/v4/2a/19/fb/2a19fb85-2f70-9e44-f2a9-82abe679b88e/886449990061.jpg/400x400cc.jpg",
          coverarthq:
            "https://is4-ssl.mzstatic.com/image/thumb/Music126/v4/2a/19/fb/2a19fb85-2f70-9e44-f2a9-82abe679b88e/886449990061.jpg/400x400cc.jpg",
          joecolor: "b:d2c8adp:090f12s:3d2b16t:313431q:5b4a34",
        },
        hub: {
          type: "APPLEMUSIC",
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
          actions: [
            {
              name: "apple",
              type: "applemusicplay",
              id: "1615585008",
            },
            {
              name: "apple",
              type: "uri",
              uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/96/7e/ea/967eea0f-3d8e-9bb6-b4c5-fb255f50b906/mzaf_16046209671483865399.plus.aac.ep.m4a",
            },
          ],
          options: [
            {
              caption: "OPEN",
              actions: [
                {
                  name: "hub:applemusic:deeplink",
                  type: "applemusicopen",
                  uri: "https://music.apple.com/gb/album/as-it-was/1615584999?i=1615585008&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
                {
                  name: "hub:applemusic:deeplink",
                  type: "uri",
                  uri: "https://music.apple.com/gb/album/as-it-was/1615584999?i=1615585008&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
              ],
              beacondata: {
                type: "open",
                providername: "applemusic",
              },
              image:
                "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
              type: "open",
              listcaption: "Open in Apple Music",
              overflowimage:
                "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
              colouroverflowimage: false,
              providername: "applemusic",
            },
          ],
          explicit: false,
          displayname: "APPLE MUSIC",
        },
        artists: [
          {
            alias: "harry-styles",
            id: "42",
            adamid: "471260289",
          },
        ],
        url: "https://www.shazam.com/track/609260140/as-it-was",
        highlightsurls: {},
        properties: {},
      },
      {
        layout: "5",
        type: "MUSIC",
        key: "618550047",
        title: "KU LO SA - A COLORS SHOW",
        subtitle: "Oxlade",
        share: {
          subject: "KU LO SA - A COLORS SHOW - Oxlade",
          text: "I used Shazam to discover KU LO SA - A COLORS SHOW by Oxlade.",
          href: "https://www.shazam.com/track/618550047/ku-lo-sa-a-colors-show",
          image:
            "https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/3c/6c/c7/3c6cc7b9-5bff-e196-2751-665fa5705ab1/196589232137.jpg/400x400cc.jpg",
          twitter:
            "I used @Shazam to discover KU LO SA - A COLORS SHOW by Oxlade.",
          html: "https://www.shazam.com/snippets/email-share/618550047?lang=en&country=GB",
          avatar:
            "https://is3-ssl.mzstatic.com/image/thumb/Features125/v4/c7/25/b3/c725b311-5818-acb3-f877-b9eec9f5a1fe/pr_source.png/800x800cc.jpg",
          snapchat: "https://www.shazam.com/partner/sc/track/618550047",
        },
        images: {
          background:
            "https://is3-ssl.mzstatic.com/image/thumb/Features125/v4/c7/25/b3/c725b311-5818-acb3-f877-b9eec9f5a1fe/pr_source.png/800x800cc.jpg",
          coverart:
            "https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/3c/6c/c7/3c6cc7b9-5bff-e196-2751-665fa5705ab1/196589232137.jpg/400x400cc.jpg",
          coverarthq:
            "https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/3c/6c/c7/3c6cc7b9-5bff-e196-2751-665fa5705ab1/196589232137.jpg/400x400cc.jpg",
          joecolor: "b:006946p:f8faeds:f1e0c8t:c7ddccq:c0c9ae",
        },
        hub: {
          type: "APPLEMUSIC",
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
          actions: [
            {
              name: "apple",
              type: "applemusicplay",
              id: "1628125458",
            },
            {
              name: "apple",
              type: "uri",
              uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/5d/be/c4/5dbec447-9b92-fe07-999f-259d4afdaf61/mzaf_15530274637544670270.plus.aac.p.m4a",
            },
          ],
          options: [
            {
              caption: "OPEN",
              actions: [
                {
                  name: "hub:applemusic:deeplink",
                  type: "applemusicopen",
                  uri: "https://music.apple.com/gb/album/ku-lo-sa-a-colors-show/1628124903?i=1628125458&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
                {
                  name: "hub:applemusic:deeplink",
                  type: "uri",
                  uri: "https://music.apple.com/gb/album/ku-lo-sa-a-colors-show/1628124903?i=1628125458&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
              ],
              beacondata: {
                type: "open",
                providername: "applemusic",
              },
              image:
                "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
              type: "open",
              listcaption: "Open in Apple Music",
              overflowimage:
                "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
              colouroverflowimage: false,
              providername: "applemusic",
            },
          ],
          explicit: false,
          displayname: "APPLE MUSIC",
        },
        artists: [
          {
            alias: "oxlade",
            id: "42",
            adamid: "968819175",
          },
        ],
        url: "https://www.shazam.com/track/618550047/ku-lo-sa-a-colors-show",
        highlightsurls: {},
        properties: {},
      },
      {
        layout: "5",
        type: "MUSIC",
        key: "625822346",
        title: "Forget Me",
        subtitle: "Lewis Capaldi",
        share: {
          subject: "Forget Me - Lewis Capaldi",
          text: "I used Shazam to discover Forget Me by Lewis Capaldi.",
          href: "https://www.shazam.com/track/625822346/forget-me",
          image:
            "https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/f9/ad/9f/f9ad9f75-07a3-69d0-fec8-4b2c7c67fe28/22UMGIM83371.rgb.jpg/400x400cc.jpg",
          twitter: "I used @Shazam to discover Forget Me by Lewis Capaldi.",
          html: "https://www.shazam.com/snippets/email-share/625822346?lang=en&country=GB",
          avatar:
            "https://is1-ssl.mzstatic.com/image/thumb/Features115/v4/d9/20/26/d92026eb-cc98-a8f7-805a-29f676076251/mzl.fuuqiuig.png/800x800cc.jpg",
          snapchat: "https://www.shazam.com/partner/sc/track/625822346",
        },
        images: {
          background:
            "https://is1-ssl.mzstatic.com/image/thumb/Features115/v4/d9/20/26/d92026eb-cc98-a8f7-805a-29f676076251/mzl.fuuqiuig.png/800x800cc.jpg",
          coverart:
            "https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/f9/ad/9f/f9ad9f75-07a3-69d0-fec8-4b2c7c67fe28/22UMGIM83371.rgb.jpg/400x400cc.jpg",
          coverarthq:
            "https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/f9/ad/9f/f9ad9f75-07a3-69d0-fec8-4b2c7c67fe28/22UMGIM83371.rgb.jpg/400x400cc.jpg",
          joecolor: "b:e8d6d6p:0d0a04s:1d1f29t:39332eq:46444c",
        },
        hub: {
          type: "APPLEMUSIC",
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
          actions: [
            {
              name: "apple",
              type: "applemusicplay",
              id: "1637088297",
            },
            {
              name: "apple",
              type: "uri",
              uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/e8/1e/2a/e81e2a3b-a51c-7aa6-8e2c-c499a2bf9eed/mzaf_5665326890495480275.plus.aac.ep.m4a",
            },
          ],
          options: [
            {
              caption: "OPEN",
              actions: [
                {
                  name: "hub:applemusic:deeplink",
                  type: "applemusicopen",
                  uri: "https://music.apple.com/gb/album/forget-me/1637088294?i=1637088297&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
                {
                  name: "hub:applemusic:deeplink",
                  type: "uri",
                  uri: "https://music.apple.com/gb/album/forget-me/1637088294?i=1637088297&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
              ],
              beacondata: {
                type: "open",
                providername: "applemusic",
              },
              image:
                "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
              type: "open",
              listcaption: "Open in Apple Music",
              overflowimage:
                "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
              colouroverflowimage: false,
              providername: "applemusic",
            },
          ],
          explicit: false,
          displayname: "APPLE MUSIC",
        },
        artists: [
          {
            alias: "lewis-capaldi",
            id: "42",
            adamid: "1213405916",
          },
        ],
        url: "https://www.shazam.com/track/625822346/forget-me",
        highlightsurls: {},
        properties: {},
      },
      {
        layout: "5",
        type: "MUSIC",
        key: "631599672",
        title: "Oublie-moi",
        subtitle: "Emkal",
        share: {
          subject: "Oublie-moi - Emkal",
          text: "I used Shazam to discover Oublie-moi by Emkal.",
          href: "https://www.shazam.com/track/631599672/oublie-moi",
          image:
            "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/73/c2/2f/73c22f25-5ecb-73b1-0bef-63c718dfee0e/196589479716.jpg/400x400cc.jpg",
          twitter: "I used @Shazam to discover Oublie-moi by Emkal.",
          html: "https://www.shazam.com/snippets/email-share/631599672?lang=en&country=GB",
          avatar:
            "https://is3-ssl.mzstatic.com/image/thumb/Features112/v4/75/55/9b/75559bab-7a33-6b3b-49b6-926fb54b509f/mzl.pkvvtmtw.png/800x800cc.jpg",
          snapchat: "https://www.shazam.com/partner/sc/track/631599672",
        },
        images: {
          background:
            "https://is3-ssl.mzstatic.com/image/thumb/Features112/v4/75/55/9b/75559bab-7a33-6b3b-49b6-926fb54b509f/mzl.pkvvtmtw.png/800x800cc.jpg",
          coverart:
            "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/73/c2/2f/73c22f25-5ecb-73b1-0bef-63c718dfee0e/196589479716.jpg/400x400cc.jpg",
          coverarthq:
            "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/73/c2/2f/73c22f25-5ecb-73b1-0bef-63c718dfee0e/196589479716.jpg/400x400cc.jpg",
          joecolor: "b:b7a599p:1a0805s:2a1c1ft:392722q:463837",
        },
        hub: {
          type: "APPLEMUSIC",
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
          actions: [
            {
              name: "apple",
              type: "applemusicplay",
              id: "1645101542",
            },
            {
              name: "apple",
              type: "uri",
              uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/91/2e/a4/912ea423-e93a-1cc8-0603-6ea9bb2c9270/mzaf_15373582857695734226.plus.aac.ep.m4a",
            },
          ],
          options: [
            {
              caption: "OPEN",
              actions: [
                {
                  name: "hub:applemusic:deeplink",
                  type: "applemusicopen",
                  uri: "https://music.apple.com/gb/album/oublie-moi/1645101471?i=1645101542&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
                {
                  name: "hub:applemusic:deeplink",
                  type: "uri",
                  uri: "https://music.apple.com/gb/album/oublie-moi/1645101471?i=1645101542&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
              ],
              beacondata: {
                type: "open",
                providername: "applemusic",
              },
              image:
                "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
              type: "open",
              listcaption: "Open in Apple Music",
              overflowimage:
                "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
              colouroverflowimage: false,
              providername: "applemusic",
            },
          ],
          explicit: true,
          displayname: "APPLE MUSIC",
        },
        artists: [
          {
            alias: "emkal",
            id: "42",
            adamid: "1436511944",
          },
        ],
        url: "https://www.shazam.com/track/631599672/oublie-moi",
        highlightsurls: {},
        properties: {},
      },
      {
        layout: "5",
        type: "MUSIC",
        key: "634714680",
        title: "THE LONELIEST",
        subtitle: "Måneskin",
        share: {
          subject: "THE LONELIEST - Måneskin",
          text: "I used Shazam to discover THE LONELIEST by Måneskin.",
          href: "https://www.shazam.com/track/634714680/the-loneliest",
          image:
            "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/02/9e/06/029e0667-367e-f60c-fee3-05588ae95834/196589461865.jpg/400x400cc.jpg",
          twitter: "I used @Shazam to discover THE LONELIEST by Måneskin.",
          html: "https://www.shazam.com/snippets/email-share/634714680?lang=en&country=GB",
          avatar:
            "https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/7d/ae/8b/7dae8be6-a1ca-37df-9003-a72505d9bad6/pr_source.png/800x800cc.jpg",
          snapchat: "https://www.shazam.com/partner/sc/track/634714680",
        },
        images: {
          background:
            "https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/7d/ae/8b/7dae8be6-a1ca-37df-9003-a72505d9bad6/pr_source.png/800x800cc.jpg",
          coverart:
            "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/02/9e/06/029e0667-367e-f60c-fee3-05588ae95834/196589461865.jpg/400x400cc.jpg",
          coverarthq:
            "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/02/9e/06/029e0667-367e-f60c-fee3-05588ae95834/196589461865.jpg/400x400cc.jpg",
          joecolor: "b:0a1620p:d5d9dfs:e0ac76t:adb2b9q:b58e65",
        },
        hub: {
          type: "APPLEMUSIC",
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
          actions: [
            {
              name: "apple",
              type: "applemusicplay",
              id: "1647221210",
            },
            {
              name: "apple",
              type: "uri",
              uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/b5/52/bd/b552bda7-a5bf-1c5f-91da-48e0b8783817/mzaf_12548670210804317750.plus.aac.ep.m4a",
            },
          ],
          options: [
            {
              caption: "OPEN",
              actions: [
                {
                  name: "hub:applemusic:deeplink",
                  type: "applemusicopen",
                  uri: "https://music.apple.com/gb/album/the-loneliest/1647221208?i=1647221210&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
                {
                  name: "hub:applemusic:deeplink",
                  type: "uri",
                  uri: "https://music.apple.com/gb/album/the-loneliest/1647221208?i=1647221210&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
              ],
              beacondata: {
                type: "open",
                providername: "applemusic",
              },
              image:
                "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
              type: "open",
              listcaption: "Open in Apple Music",
              overflowimage:
                "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
              colouroverflowimage: false,
              providername: "applemusic",
            },
          ],
          explicit: false,
          displayname: "APPLE MUSIC",
        },
        artists: [
          {
            alias: "m%C3%A5neskin",
            id: "42",
            adamid: "1312874741",
          },
        ],
        url: "https://www.shazam.com/track/634714680/the-loneliest",
        highlightsurls: {},
        properties: {},
      },
      {
        layout: "5",
        type: "MUSIC",
        key: "616481349",
        title: "B.O.T.A. (Baddest Of Them All)",
        subtitle: "Eliza Rose & Interplanetary Criminal",
        share: {
          subject:
            "B.O.T.A. (Baddest Of Them All) - Eliza Rose & Interplanetary Criminal",
          text: "I used Shazam to discover B.O.T.A. (Baddest Of Them All) by Eliza Rose & Interplanetary Criminal.",
          href: "https://www.shazam.com/track/616481349/b-o-t-a-baddest-of-them-all",
          image:
            "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/f3/df/5b/f3df5b83-5e1a-0fff-b05d-91eae8b071e8/5054197307126.jpg/400x400cc.jpg",
          twitter:
            "I used @Shazam to discover B.O.T.A. (Baddest Of Them All) by Eliza Rose & Interplanetary Criminal.",
          html: "https://www.shazam.com/snippets/email-share/616481349?lang=en&country=GB",
          avatar:
            "https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/e4/4f/00/e44f005f-9e59-66a4-2eab-4c454794ac31/pr_source.png/800x800cc.jpg",
          snapchat: "https://www.shazam.com/partner/sc/track/616481349",
        },
        images: {
          background:
            "https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/e4/4f/00/e44f005f-9e59-66a4-2eab-4c454794ac31/pr_source.png/800x800cc.jpg",
          coverart:
            "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/f3/df/5b/f3df5b83-5e1a-0fff-b05d-91eae8b071e8/5054197307126.jpg/400x400cc.jpg",
          coverarthq:
            "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/f3/df/5b/f3df5b83-5e1a-0fff-b05d-91eae8b071e8/5054197307126.jpg/400x400cc.jpg",
          joecolor: "b:110858p:2ad28es:f69c50t:25a983q:c87f51",
        },
        hub: {
          type: "APPLEMUSIC",
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
          actions: [
            {
              name: "apple",
              type: "applemusicplay",
              id: "1639317828",
            },
            {
              name: "apple",
              type: "uri",
              uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/4e/79/c3/4e79c381-bd74-4c08-b33e-142c15964286/mzaf_18363535661891469360.plus.aac.ep.m4a",
            },
          ],
          options: [
            {
              caption: "OPEN",
              actions: [
                {
                  name: "hub:applemusic:deeplink",
                  type: "applemusicopen",
                  uri: "https://music.apple.com/gb/album/b-o-t-a-baddest-of-them-all/1639317367?i=1639317828&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
                {
                  name: "hub:applemusic:deeplink",
                  type: "uri",
                  uri: "https://music.apple.com/gb/album/b-o-t-a-baddest-of-them-all/1639317367?i=1639317828&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
              ],
              beacondata: {
                type: "open",
                providername: "applemusic",
              },
              image:
                "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
              type: "open",
              listcaption: "Open in Apple Music",
              overflowimage:
                "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
              colouroverflowimage: false,
              providername: "applemusic",
            },
          ],
          explicit: false,
          displayname: "APPLE MUSIC",
        },
        artists: [
          {
            alias: "eliza-rose",
            id: "42",
            adamid: "156384506",
          },
          {
            alias: "interplanetary-criminal",
            id: "42",
            adamid: "1136192992",
          },
        ],
        url: "https://www.shazam.com/track/616481349/b-o-t-a-baddest-of-them-all",
        highlightsurls: {},
        properties: {},
      },
      {
        layout: "5",
        type: "MUSIC",
        key: "106479411",
        title: "Tourner Dans Le Vide",
        subtitle: "Indila",
        share: {
          subject: "Tourner Dans Le Vide - Indila",
          text: "I used Shazam to discover Tourner Dans Le Vide by Indila.",
          href: "https://www.shazam.com/track/106479411/tourner-dans-le-vide",
          image:
            "https://is4-ssl.mzstatic.com/image/thumb/Music114/v4/c0/d9/7f/c0d97fd9-2a06-61d8-86c2-96fac328e0b1/00602537735709.rgb.jpg/400x400cc.jpg",
          twitter: "I used @Shazam to discover Tourner Dans Le Vide by Indila.",
          html: "https://www.shazam.com/snippets/email-share/106479411?lang=en&country=GB",
          avatar:
            "https://is4-ssl.mzstatic.com/image/thumb/Features115/v4/f8/f2/e8/f8f2e848-e07f-4597-d918-b1da37a8a85c/mzl.zcdmhnlk.jpg/800x800cc.jpg",
          snapchat: "https://www.shazam.com/partner/sc/track/106479411",
        },
        images: {
          background:
            "https://is4-ssl.mzstatic.com/image/thumb/Features115/v4/f8/f2/e8/f8f2e848-e07f-4597-d918-b1da37a8a85c/mzl.zcdmhnlk.jpg/800x800cc.jpg",
          coverart:
            "https://is4-ssl.mzstatic.com/image/thumb/Music114/v4/c0/d9/7f/c0d97fd9-2a06-61d8-86c2-96fac328e0b1/00602537735709.rgb.jpg/400x400cc.jpg",
          coverarthq:
            "https://is4-ssl.mzstatic.com/image/thumb/Music114/v4/c0/d9/7f/c0d97fd9-2a06-61d8-86c2-96fac328e0b1/00602537735709.rgb.jpg/400x400cc.jpg",
          joecolor: "b:8f8d94p:100c0bs:141110t:292626q:2c2a2a",
        },
        hub: {
          type: "APPLEMUSIC",
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
          actions: [
            {
              name: "apple",
              type: "applemusicplay",
              id: "1440830556",
            },
            {
              name: "apple",
              type: "uri",
              uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/50/ed/6e/50ed6e97-8f42-1d50-2594-95304ba8c233/mzaf_10499799276396112567.plus.aac.ep.m4a",
            },
          ],
          options: [
            {
              caption: "OPEN",
              actions: [
                {
                  name: "hub:applemusic:deeplink",
                  type: "applemusicopen",
                  uri: "https://music.apple.com/gb/album/tourner-dans-le-vide/1440830382?i=1440830556&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
                {
                  name: "hub:applemusic:deeplink",
                  type: "uri",
                  uri: "https://music.apple.com/gb/album/tourner-dans-le-vide/1440830382?i=1440830556&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
              ],
              beacondata: {
                type: "open",
                providername: "applemusic",
              },
              image:
                "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
              type: "open",
              listcaption: "Open in Apple Music",
              overflowimage:
                "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
              colouroverflowimage: false,
              providername: "applemusic",
            },
          ],
          explicit: false,
          displayname: "APPLE MUSIC",
        },
        artists: [
          {
            alias: "indila",
            id: "42",
            adamid: "365001429",
          },
        ],
        url: "https://www.shazam.com/track/106479411/tourner-dans-le-vide",
        highlightsurls: {},
        properties: {},
      },
      {
        layout: "5",
        type: "MUSIC",
        key: "511001043",
        title: "Per Favore",
        subtitle: "Nyv",
        share: {
          subject: "Per Favore - Nyv",
          text: "I used Shazam to discover Per Favore by Nyv.",
          href: "https://www.shazam.com/track/511001043/per-favore",
          image:
            "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/4c/66/f2/4c66f251-e46c-ce3c-2fff-d688bd05655b/20UMGIM65794.rgb.jpg/400x400cc.jpg",
          twitter: "I used @Shazam to discover Per Favore by Nyv.",
          html: "https://www.shazam.com/snippets/email-share/511001043?lang=en&country=GB",
          avatar:
            "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/41/18/ff/4118ffd6-543a-3083-ff06-03a9e7f9ff4f/pr_source.png/800x800cc.jpg",
          snapchat: "https://www.shazam.com/partner/sc/track/511001043",
        },
        images: {
          background:
            "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/41/18/ff/4118ffd6-543a-3083-ff06-03a9e7f9ff4f/pr_source.png/800x800cc.jpg",
          coverart:
            "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/4c/66/f2/4c66f251-e46c-ce3c-2fff-d688bd05655b/20UMGIM65794.rgb.jpg/400x400cc.jpg",
          coverarthq:
            "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/4c/66/f2/4c66f251-e46c-ce3c-2fff-d688bd05655b/20UMGIM65794.rgb.jpg/400x400cc.jpg",
          joecolor: "b:ffffffp:1e1515s:39241dt:4b4344q:61504a",
        },
        hub: {
          type: "APPLEMUSIC",
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
          actions: [
            {
              name: "apple",
              type: "applemusicplay",
              id: "1526454258",
            },
            {
              name: "apple",
              type: "uri",
              uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/f0/e9/e0/f0e9e01e-ffff-927c-b3d2-e56a09d2b665/mzaf_7576588553607195808.plus.aac.ep.m4a",
            },
          ],
          options: [
            {
              caption: "OPEN",
              actions: [
                {
                  name: "hub:applemusic:deeplink",
                  type: "applemusicopen",
                  uri: "https://music.apple.com/gb/album/per-favore/1526454254?i=1526454258&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
                {
                  name: "hub:applemusic:deeplink",
                  type: "uri",
                  uri: "https://music.apple.com/gb/album/per-favore/1526454254?i=1526454258&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
              ],
              beacondata: {
                type: "open",
                providername: "applemusic",
              },
              image:
                "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
              type: "open",
              listcaption: "Open in Apple Music",
              overflowimage:
                "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
              colouroverflowimage: false,
              providername: "applemusic",
            },
          ],
          explicit: false,
          displayname: "APPLE MUSIC",
        },
        artists: [
          {
            alias: "nyv",
            id: "42",
            adamid: "967085715",
          },
        ],
        url: "https://www.shazam.com/track/511001043/per-favore",
        highlightsurls: {},
        properties: {},
      },
      {
        layout: "5",
        type: "MUSIC",
        key: "621419403",
        title: "Bad Habit",
        subtitle: "Steve Lacy",
        share: {
          subject: "Bad Habit - Steve Lacy",
          text: "I used Shazam to discover Bad Habit by Steve Lacy.",
          href: "https://www.shazam.com/track/621419403/bad-habit",
          image:
            "https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/2a/cb/e3/2acbe3f1-7a65-e2c1-8f12-ba04c6ee05dc/196589099631.jpg/400x400cc.jpg",
          twitter: "I used @Shazam to discover Bad Habit by Steve Lacy.",
          html: "https://www.shazam.com/snippets/email-share/621419403?lang=en&country=GB",
          avatar:
            "https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/4c/13/f4/4c13f434-29ff-36d5-2d40-d6a97a149ba4/pr_source.png/800x800cc.jpg",
          snapchat: "https://www.shazam.com/partner/sc/track/621419403",
        },
        images: {
          background:
            "https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/4c/13/f4/4c13f434-29ff-36d5-2d40-d6a97a149ba4/pr_source.png/800x800cc.jpg",
          coverart:
            "https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/2a/cb/e3/2acbe3f1-7a65-e2c1-8f12-ba04c6ee05dc/196589099631.jpg/400x400cc.jpg",
          coverarthq:
            "https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/2a/cb/e3/2acbe3f1-7a65-e2c1-8f12-ba04c6ee05dc/196589099631.jpg/400x400cc.jpg",
          joecolor: "b:005493p:f4f0efs:e8d3d1t:c3d1dcq:b9bac4",
        },
        hub: {
          type: "APPLEMUSIC",
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
          actions: [
            {
              name: "apple",
              type: "applemusicplay",
              id: "1631909584",
            },
            {
              name: "apple",
              type: "uri",
              uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/78/fa/9e/78fa9e09-f3fd-74ff-2aa9-dfe769d9d872/mzaf_9884762135920880405.plus.aac.ep.m4a",
            },
          ],
          options: [
            {
              caption: "OPEN",
              actions: [
                {
                  name: "hub:applemusic:deeplink",
                  type: "applemusicopen",
                  uri: "https://music.apple.com/gb/album/bad-habit/1631909576?i=1631909584&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
                {
                  name: "hub:applemusic:deeplink",
                  type: "uri",
                  uri: "https://music.apple.com/gb/album/bad-habit/1631909576?i=1631909584&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
              ],
              beacondata: {
                type: "open",
                providername: "applemusic",
              },
              image:
                "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
              type: "open",
              listcaption: "Open in Apple Music",
              overflowimage:
                "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
              colouroverflowimage: false,
              providername: "applemusic",
            },
          ],
          explicit: true,
          displayname: "APPLE MUSIC",
        },
        artists: [
          {
            alias: "steve-lacy",
            id: "42",
            adamid: "1210275020",
          },
        ],
        url: "https://www.shazam.com/track/621419403/bad-habit",
        highlightsurls: {},
        properties: {},
      },
      {
        layout: "5",
        type: "MUSIC",
        key: "636922696",
        title: "Вредина (Mbts Remix)",
        subtitle: "Bakr",
        share: {
          subject: "Вредина (Mbts Remix) - Bakr",
          text: "I used Shazam to discover Вредина (Mbts Remix) by Bakr.",
          href: "https://www.shazam.com/track/636922696/%D0%B2%D1%80%D0%B5%D0%B4%D0%B8%D0%BD%D0%B0-mbts-remix",
          image:
            "https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/cc/81/97/cc8197bf-a016-1e09-8b17-5a60c5ec0e17/cover.jpg/400x400cc.jpg",
          twitter: "I used @Shazam to discover Вредина (Mbts Remix) by Bakr.",
          html: "https://www.shazam.com/snippets/email-share/636922696?lang=en&country=GB",
          avatar:
            "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/7e/f8/24/7ef8245b-f8ae-7fa3-c943-ddf6d595cbd7/pr_source.png/800x800cc.jpg",
          snapchat: "https://www.shazam.com/partner/sc/track/636922696",
        },
        images: {
          background:
            "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/7e/f8/24/7ef8245b-f8ae-7fa3-c943-ddf6d595cbd7/pr_source.png/800x800cc.jpg",
          coverart:
            "https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/cc/81/97/cc8197bf-a016-1e09-8b17-5a60c5ec0e17/cover.jpg/400x400cc.jpg",
          coverarthq:
            "https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/cc/81/97/cc8197bf-a016-1e09-8b17-5a60c5ec0e17/cover.jpg/400x400cc.jpg",
          joecolor: "b:9fb96fp:170e38s:281f3bt:323043q:3f3d45",
        },
        hub: {
          type: "APPLEMUSIC",
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
          actions: [
            {
              name: "apple",
              type: "applemusicplay",
              id: "1651003725",
            },
            {
              name: "apple",
              type: "uri",
              uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/69/8e/09/698e0968-8479-e58f-c110-81c0557e6901/mzaf_15516296174971916078.plus.aac.ep.m4a",
            },
          ],
          options: [
            {
              caption: "OPEN",
              actions: [
                {
                  name: "hub:applemusic:deeplink",
                  type: "applemusicopen",
                  uri: "https://music.apple.com/gb/album/%D0%B2%D1%80%D0%B5%D0%B4%D0%B8%D0%BD%D0%B0-mbts-remix/1651003504?i=1651003725&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
                {
                  name: "hub:applemusic:deeplink",
                  type: "uri",
                  uri: "https://music.apple.com/gb/album/%D0%B2%D1%80%D0%B5%D0%B4%D0%B8%D0%BD%D0%B0-mbts-remix/1651003504?i=1651003725&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
              ],
              beacondata: {
                type: "open",
                providername: "applemusic",
              },
              image:
                "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
              type: "open",
              listcaption: "Open in Apple Music",
              overflowimage:
                "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
              colouroverflowimage: false,
              providername: "applemusic",
            },
          ],
          explicit: false,
          displayname: "APPLE MUSIC",
        },
        artists: [
          {
            alias: "bakr",
            id: "42",
            adamid: "1552904011",
          },
        ],
        url: "https://www.shazam.com/track/636922696/%D0%B2%D1%80%D0%B5%D0%B4%D0%B8%D0%BD%D0%B0-mbts-remix",
        highlightsurls: {},
        properties: {},
      },
      {
        layout: "5",
        type: "MUSIC",
        key: "44454784",
        title: "Flow Natural (feat. Beenie Man & Ines)",
        subtitle: "Tito El Bambino",
        share: {
          subject: "Flow Natural (feat. Beenie Man & Ines) - Tito El Bambino",
          text: "I used Shazam to discover Flow Natural (feat. Beenie Man & Ines) by Tito El Bambino.",
          href: "https://www.shazam.com/track/44454784/flow-natural-feat-beenie-man-ines",
          image:
            "https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/5f/28/2e/5f282ead-d66a-13f9-f932-d13eed0003c4/00094634955256.jpg/400x400cc.jpg",
          twitter:
            "I used @Shazam to discover Flow Natural (feat. Beenie Man & Ines) by Tito El Bambino.",
          html: "https://www.shazam.com/snippets/email-share/44454784?lang=en&country=GB",
          avatar:
            "https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/c3/5d/88/c35d88c3-5351-4084-3fd6-76fa4099be6a/pr_source.png/800x800cc.jpg",
          snapchat: "https://www.shazam.com/partner/sc/track/44454784",
        },
        images: {
          background:
            "https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/c3/5d/88/c35d88c3-5351-4084-3fd6-76fa4099be6a/pr_source.png/800x800cc.jpg",
          coverart:
            "https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/5f/28/2e/5f282ead-d66a-13f9-f932-d13eed0003c4/00094634955256.jpg/400x400cc.jpg",
          coverarthq:
            "https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/5f/28/2e/5f282ead-d66a-13f9-f932-d13eed0003c4/00094634955256.jpg/400x400cc.jpg",
          joecolor: "b:000201p:fefffds:fbefd9t:cbcccaq:c9c0ae",
        },
        hub: {
          type: "APPLEMUSIC",
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
          actions: [
            {
              name: "apple",
              type: "applemusicplay",
              id: "714514834",
            },
            {
              name: "apple",
              type: "uri",
              uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/c6/0f/cb/c60fcb21-dfea-a0b1-262a-e2ba29749ed4/mzaf_12673589553129773371.plus.aac.ep.m4a",
            },
          ],
          options: [
            {
              caption: "OPEN",
              actions: [
                {
                  name: "hub:applemusic:deeplink",
                  type: "applemusicopen",
                  uri: "https://music.apple.com/gb/album/flow-natural-feat-beenie-man-ines/714514224?i=714514834&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
                {
                  name: "hub:applemusic:deeplink",
                  type: "uri",
                  uri: "https://music.apple.com/gb/album/flow-natural-feat-beenie-man-ines/714514224?i=714514834&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
              ],
              beacondata: {
                type: "open",
                providername: "applemusic",
              },
              image:
                "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
              type: "open",
              listcaption: "Open in Apple Music",
              overflowimage:
                "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
              colouroverflowimage: false,
              providername: "applemusic",
            },
          ],
          explicit: false,
          displayname: "APPLE MUSIC",
        },
        artists: [
          {
            alias: "tito-el-bambino",
            id: "42",
            adamid: "76542401",
          },
        ],
        url: "https://www.shazam.com/track/44454784/flow-natural-feat-beenie-man-ines",
        highlightsurls: {},
        properties: {},
      },
      {
        layout: "5",
        type: "MUSIC",
        key: "615128855",
        title: "Miss You",
        subtitle: "Southstar",
        share: {
          subject: "Miss You - Southstar",
          text: "I used Shazam to discover Miss You by Southstar.",
          href: "https://www.shazam.com/track/615128855/miss-you",
          image:
            "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/b3/84/b3/b384b381-39ed-6d2e-bce9-d4c2b9b71662/cover_4064832984811.jpg/400x400cc.jpg",
          twitter: "I used @Shazam to discover Miss You by Southstar.",
          html: "https://www.shazam.com/snippets/email-share/615128855?lang=en&country=GB",
          avatar:
            "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/73/f3/01/73f3019c-9826-9e3a-d535-6d3fac00cc18/pr_source.png/800x800cc.jpg",
          snapchat: "https://www.shazam.com/partner/sc/track/615128855",
        },
        images: {
          background:
            "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/73/f3/01/73f3019c-9826-9e3a-d535-6d3fac00cc18/pr_source.png/800x800cc.jpg",
          coverart:
            "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/b3/84/b3/b384b381-39ed-6d2e-bce9-d4c2b9b71662/cover_4064832984811.jpg/400x400cc.jpg",
          coverarthq:
            "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/b3/84/b3/b384b381-39ed-6d2e-bce9-d4c2b9b71662/cover_4064832984811.jpg/400x400cc.jpg",
        },
        hub: {
          type: "APPLEMUSIC",
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
          options: [
            {
              caption: "OPEN",
              actions: [
                {
                  name: "hub:applemusic:subscribe",
                  type: "applemusicopen",
                  uri: "https://music.apple.com/subscribe?mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
                {
                  name: "hub:applemusic:subscribe",
                  type: "uri",
                  uri: "https://music.apple.com/subscribe?mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
              ],
              beacondata: {
                type: "open",
                providername: "applemusic",
              },
              image:
                "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
              type: "open",
              listcaption: "Open in Apple Music",
              overflowimage:
                "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
              colouroverflowimage: false,
              providername: "applemusic",
            },
          ],
          explicit: false,
          displayname: "APPLE MUSIC",
        },
        artists: [
          {
            alias: "southstar",
            id: "42",
            adamid: "64363803",
          },
        ],
        url: "https://www.shazam.com/track/615128855/miss-you",
        highlightsurls: {},
        properties: {},
      },
      {
        layout: "5",
        type: "MUSIC",
        key: "606589047",
        title: "Bones",
        subtitle: "Imagine Dragons",
        share: {
          subject: "Bones - Imagine Dragons",
          text: "I used Shazam to discover Bones by Imagine Dragons.",
          href: "https://www.shazam.com/track/606589047/bones",
          image:
            "https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/33/87/c8/3387c827-adaa-681d-bd10-ce7d8e888b9c/22UMGIM21054.rgb.jpg/400x400cc.jpg",
          twitter: "I used @Shazam to discover Bones by Imagine Dragons.",
          html: "https://www.shazam.com/snippets/email-share/606589047?lang=en&country=GB",
          avatar:
            "https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/83/bd/b7/83bdb7ff-63a6-2252-e04b-ece8ebdc5768/pr_source.png/800x800cc.jpg",
          snapchat: "https://www.shazam.com/partner/sc/track/606589047",
        },
        images: {
          background:
            "https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/83/bd/b7/83bdb7ff-63a6-2252-e04b-ece8ebdc5768/pr_source.png/800x800cc.jpg",
          coverart:
            "https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/33/87/c8/3387c827-adaa-681d-bd10-ce7d8e888b9c/22UMGIM21054.rgb.jpg/400x400cc.jpg",
          coverarthq:
            "https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/33/87/c8/3387c827-adaa-681d-bd10-ce7d8e888b9c/22UMGIM21054.rgb.jpg/400x400cc.jpg",
          joecolor: "b:e3dcccp:000000s:211d1at:2d2c28q:48433d",
        },
        hub: {
          type: "APPLEMUSIC",
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
          actions: [
            {
              name: "apple",
              type: "applemusicplay",
              id: "1612321591",
            },
            {
              name: "apple",
              type: "uri",
              uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/85/bd/1e/85bd1eaa-8aa2-2f8c-d84d-bd66a525faf9/mzaf_17880216165394527644.plus.aac.ep.m4a",
            },
          ],
          options: [
            {
              caption: "OPEN",
              actions: [
                {
                  name: "hub:applemusic:deeplink",
                  type: "applemusicopen",
                  uri: "https://music.apple.com/gb/album/bones/1612321587?i=1612321591&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
                {
                  name: "hub:applemusic:deeplink",
                  type: "uri",
                  uri: "https://music.apple.com/gb/album/bones/1612321587?i=1612321591&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
              ],
              beacondata: {
                type: "open",
                providername: "applemusic",
              },
              image:
                "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
              type: "open",
              listcaption: "Open in Apple Music",
              overflowimage:
                "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
              colouroverflowimage: false,
              providername: "applemusic",
            },
          ],
          explicit: false,
          displayname: "APPLE MUSIC",
        },
        artists: [
          {
            alias: "imagine-dragons",
            id: "42",
            adamid: "358714030",
          },
        ],
        url: "https://www.shazam.com/track/606589047/bones",
        highlightsurls: {},
        properties: {},
      },
      {
        layout: "5",
        type: "MUSIC",
        key: "629626360",
        title: "Celestial",
        subtitle: "Ed Sheeran",
        share: {
          subject: "Celestial - Ed Sheeran",
          text: "I used Shazam to discover Celestial by Ed Sheeran.",
          href: "https://www.shazam.com/track/629626360/celestial",
          image:
            "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/5d/c4/14/5dc414eb-f6ef-0713-789b-7d6da40bf72a/5054197332692.jpg/400x400cc.jpg",
          twitter: "I used @Shazam to discover Celestial by Ed Sheeran.",
          html: "https://www.shazam.com/snippets/email-share/629626360?lang=en&country=GB",
          avatar:
            "https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/5a/60/84/5a60849d-4fcd-13a6-0715-4621186bab23/pr_source.png/800x800cc.jpg",
          snapchat: "https://www.shazam.com/partner/sc/track/629626360",
        },
        images: {
          background:
            "https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/5a/60/84/5a60849d-4fcd-13a6-0715-4621186bab23/pr_source.png/800x800cc.jpg",
          coverart:
            "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/5d/c4/14/5dc414eb-f6ef-0713-789b-7d6da40bf72a/5054197332692.jpg/400x400cc.jpg",
          coverarthq:
            "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/5d/c4/14/5dc414eb-f6ef-0713-789b-7d6da40bf72a/5054197332692.jpg/400x400cc.jpg",
          joecolor: "b:18acacp:050506s:1c1c1ct:092727q:1b3939",
        },
        hub: {
          type: "APPLEMUSIC",
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
          actions: [
            {
              name: "apple",
              type: "applemusicplay",
              id: "1641565456",
            },
            {
              name: "apple",
              type: "uri",
              uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/f2/4c/fc/f24cfc19-2d54-6c62-921d-b4427b561a67/mzaf_14570363555431960510.plus.aac.ep.m4a",
            },
          ],
          options: [
            {
              caption: "OPEN",
              actions: [
                {
                  name: "hub:applemusic:deeplink",
                  type: "applemusicopen",
                  uri: "https://music.apple.com/gb/album/celestial/1641565065?i=1641565456&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
                {
                  name: "hub:applemusic:deeplink",
                  type: "uri",
                  uri: "https://music.apple.com/gb/album/celestial/1641565065?i=1641565456&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
              ],
              beacondata: {
                type: "open",
                providername: "applemusic",
              },
              image:
                "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
              type: "open",
              listcaption: "Open in Apple Music",
              overflowimage:
                "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
              colouroverflowimage: false,
              providername: "applemusic",
            },
          ],
          explicit: false,
          displayname: "APPLE MUSIC",
        },
        artists: [
          {
            alias: "ed-sheeran",
            id: "42",
            adamid: "183313439",
          },
        ],
        url: "https://www.shazam.com/track/629626360/celestial",
        highlightsurls: {},
        properties: {},
      },
      {
        layout: "5",
        type: "MUSIC",
        key: "621931010",
        title: "Bad Memories (feat. Elley Duhé & FAST BOY)",
        subtitle: "Meduza & James Carter",
        share: {
          subject:
            "Bad Memories (feat. Elley Duhé & FAST BOY) - Meduza & James Carter",
          text: "I used Shazam to discover Bad Memories (feat. Elley Duhé & FAST BOY) by Meduza & James Carter.",
          href: "https://www.shazam.com/track/621931010/bad-memories-feat-elley-duh%C3%A9-fast-boy",
          image:
            "https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/66/b3/57/66b35776-3173-19be-ce25-8f13874d28c2/22UM1IM09505.rgb.jpg/400x400cc.jpg",
          twitter:
            "I used @Shazam to discover Bad Memories (feat. Elley Duhé & FAST BOY) by Meduza & James Carter.",
          html: "https://www.shazam.com/snippets/email-share/621931010?lang=en&country=GB",
          avatar:
            "https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/96/a0/20/96a02073-bb69-4ae5-dd8d-d06c18567c20/pr_source.png/800x800cc.jpg",
          snapchat: "https://www.shazam.com/partner/sc/track/621931010",
        },
        images: {
          background:
            "https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/96/a0/20/96a02073-bb69-4ae5-dd8d-d06c18567c20/pr_source.png/800x800cc.jpg",
          coverart:
            "https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/66/b3/57/66b35776-3173-19be-ce25-8f13874d28c2/22UM1IM09505.rgb.jpg/400x400cc.jpg",
          coverarthq:
            "https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/66/b3/57/66b35776-3173-19be-ce25-8f13874d28c2/22UM1IM09505.rgb.jpg/400x400cc.jpg",
          joecolor: "b:ffffffp:000000s:402000t:333333q:664c33",
        },
        hub: {
          type: "APPLEMUSIC",
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
          actions: [
            {
              name: "apple",
              type: "applemusicplay",
              id: "1648110693",
            },
            {
              name: "apple",
              type: "uri",
              uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/8f/ba/a4/8fbaa4a7-380f-624d-c416-0706222c9d2f/mzaf_2131289259514280306.plus.aac.p.m4a",
            },
          ],
          options: [
            {
              caption: "OPEN",
              actions: [
                {
                  name: "hub:applemusic:deeplink",
                  type: "applemusicopen",
                  uri: "https://music.apple.com/gb/album/bad-memories-feat-elley-duh%C3%A9-fast-boy/1648110683?i=1648110693&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
                {
                  name: "hub:applemusic:deeplink",
                  type: "uri",
                  uri: "https://music.apple.com/gb/album/bad-memories-feat-elley-duh%C3%A9-fast-boy/1648110683?i=1648110693&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
              ],
              beacondata: {
                type: "open",
                providername: "applemusic",
              },
              image:
                "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
              type: "open",
              listcaption: "Open in Apple Music",
              overflowimage:
                "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
              colouroverflowimage: false,
              providername: "applemusic",
            },
          ],
          explicit: false,
          displayname: "APPLE MUSIC",
        },
        artists: [
          {
            alias: "meduza",
            id: "42",
            adamid: "1449138676",
          },
          {
            alias: "james-carter",
            id: "42",
            adamid: "723692280",
          },
        ],
        url: "https://www.shazam.com/track/621931010/bad-memories-feat-elley-duh%C3%A9-fast-boy",
        highlightsurls: {},
        properties: {},
      },
      {
        layout: "5",
        type: "MUSIC",
        key: "615447735",
        title: "BILLIE EILISH.",
        subtitle: "Armani White",
        share: {
          subject: "BILLIE EILISH. - Armani White",
          text: "I used Shazam to discover BILLIE EILISH. by Armani White.",
          href: "https://www.shazam.com/track/615447735/billie-eilish",
          image:
            "https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/c1/ea/3a/c1ea3a25-93af-84fd-2ca6-59e4210f58aa/22UMGIM62666.rgb.jpg/400x400cc.jpg",
          twitter: "I used @Shazam to discover BILLIE EILISH. by Armani White.",
          html: "https://www.shazam.com/snippets/email-share/615447735?lang=en&country=GB",
          avatar:
            "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/80/0f/ac/800fac1c-41aa-8b19-1e6a-605fe1311cb0/pr_source.png/800x800cc.jpg",
          snapchat: "https://www.shazam.com/partner/sc/track/615447735",
        },
        images: {
          background:
            "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/80/0f/ac/800fac1c-41aa-8b19-1e6a-605fe1311cb0/pr_source.png/800x800cc.jpg",
          coverart:
            "https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/c1/ea/3a/c1ea3a25-93af-84fd-2ca6-59e4210f58aa/22UMGIM62666.rgb.jpg/400x400cc.jpg",
          coverarthq:
            "https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/c1/ea/3a/c1ea3a25-93af-84fd-2ca6-59e4210f58aa/22UMGIM62666.rgb.jpg/400x400cc.jpg",
          joecolor: "b:352839p:53ddf1s:30c1f5t:4db9ccq:31a2cf",
        },
        hub: {
          type: "APPLEMUSIC",
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
          actions: [
            {
              name: "apple",
              type: "applemusicplay",
              id: "1628828521",
            },
            {
              name: "apple",
              type: "uri",
              uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/df/50/c3/df50c3aa-451c-7d16-d930-9dd4ff47612c/mzaf_2051892523701935260.plus.aac.p.m4a",
            },
          ],
          options: [
            {
              caption: "OPEN",
              actions: [
                {
                  name: "hub:applemusic:deeplink",
                  type: "applemusicopen",
                  uri: "https://music.apple.com/gb/album/billie-eilish/1628828345?i=1628828521&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
                {
                  name: "hub:applemusic:deeplink",
                  type: "uri",
                  uri: "https://music.apple.com/gb/album/billie-eilish/1628828345?i=1628828521&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
              ],
              beacondata: {
                type: "open",
                providername: "applemusic",
              },
              image:
                "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
              type: "open",
              listcaption: "Open in Apple Music",
              overflowimage:
                "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
              colouroverflowimage: false,
              providername: "applemusic",
            },
          ],
          explicit: true,
          displayname: "APPLE MUSIC",
        },
        artists: [
          {
            alias: "armani-white",
            id: "42",
            adamid: "1129439109",
          },
        ],
        url: "https://www.shazam.com/track/615447735/billie-eilish",
        highlightsurls: {},
        properties: {},
      },
      {
        layout: "5",
        type: "MUSIC",
        key: "616089001",
        title: "La Bachata",
        subtitle: "Manuel Turizo",
        share: {
          subject: "La Bachata - Manuel Turizo",
          text: "I used Shazam to discover La Bachata by Manuel Turizo.",
          href: "https://www.shazam.com/track/616089001/la-bachata",
          image:
            "https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/df/70/11/df701101-9f0f-3c43-ff6d-2186235d7e9c/196589129123.jpg/400x400cc.jpg",
          twitter: "I used @Shazam to discover La Bachata by Manuel Turizo.",
          html: "https://www.shazam.com/snippets/email-share/616089001?lang=en&country=GB",
          avatar:
            "https://is3-ssl.mzstatic.com/image/thumb/AMCArtistImages122/v4/36/29/5d/36295dc0-c702-27e3-2fae-db87c4bd5f5f/8852142c-0aab-4df5-bfff-6e9ccfaa5311_ami-identity-4535412cf1fdce568ee64eef9a988b9a-2022-10-27T20-27-41.381Z_cropped.png/800x800cc.jpg",
          snapchat: "https://www.shazam.com/partner/sc/track/616089001",
        },
        images: {
          background:
            "https://is3-ssl.mzstatic.com/image/thumb/AMCArtistImages122/v4/36/29/5d/36295dc0-c702-27e3-2fae-db87c4bd5f5f/8852142c-0aab-4df5-bfff-6e9ccfaa5311_ami-identity-4535412cf1fdce568ee64eef9a988b9a-2022-10-27T20-27-41.381Z_cropped.png/800x800cc.jpg",
          coverart:
            "https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/df/70/11/df701101-9f0f-3c43-ff6d-2186235d7e9c/196589129123.jpg/400x400cc.jpg",
          coverarthq:
            "https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/df/70/11/df701101-9f0f-3c43-ff6d-2186235d7e9c/196589129123.jpg/400x400cc.jpg",
          joecolor: "b:eef9ffp:09060ds:3b241bt:37373dq:5f4e49",
        },
        hub: {
          type: "APPLEMUSIC",
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
          actions: [
            {
              name: "apple",
              type: "applemusicplay",
              id: "1624563284",
            },
            {
              name: "apple",
              type: "uri",
              uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/c9/3f/2b/c93f2bd7-8e9a-aa9f-c1e9-423654990c18/mzaf_6489444487574180143.plus.aac.ep.m4a",
            },
          ],
          options: [
            {
              caption: "OPEN",
              actions: [
                {
                  name: "hub:applemusic:deeplink",
                  type: "applemusicopen",
                  uri: "https://music.apple.com/gb/album/la-bachata/1624563280?i=1624563284&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
                {
                  name: "hub:applemusic:deeplink",
                  type: "uri",
                  uri: "https://music.apple.com/gb/album/la-bachata/1624563280?i=1624563284&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
              ],
              beacondata: {
                type: "open",
                providername: "applemusic",
              },
              image:
                "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
              type: "open",
              listcaption: "Open in Apple Music",
              overflowimage:
                "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
              colouroverflowimage: false,
              providername: "applemusic",
            },
          ],
          explicit: false,
          displayname: "APPLE MUSIC",
        },
        artists: [
          {
            alias: "manuel-turizo",
            id: "42",
            adamid: "1186116587",
          },
        ],
        url: "https://www.shazam.com/track/616089001/la-bachata",
        highlightsurls: {},
        properties: {},
      },
      {
        layout: "5",
        type: "MUSIC",
        key: "612684931",
        title: "Late Night Talking",
        subtitle: "Harry Styles",
        share: {
          subject: "Late Night Talking - Harry Styles",
          text: "I used Shazam to discover Late Night Talking by Harry Styles.",
          href: "https://www.shazam.com/track/612684931/late-night-talking",
          image:
            "https://is4-ssl.mzstatic.com/image/thumb/Music126/v4/2a/19/fb/2a19fb85-2f70-9e44-f2a9-82abe679b88e/886449990061.jpg/400x400cc.jpg",
          twitter:
            "I used @Shazam to discover Late Night Talking by Harry Styles.",
          html: "https://www.shazam.com/snippets/email-share/612684931?lang=en&country=GB",
          avatar:
            "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/00/8f/26/008f26ce-ec78-ad42-9303-260ac3b9701c/pr_source.png/800x800cc.jpg",
          snapchat: "https://www.shazam.com/partner/sc/track/612684931",
        },
        images: {
          background:
            "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/00/8f/26/008f26ce-ec78-ad42-9303-260ac3b9701c/pr_source.png/800x800cc.jpg",
          coverart:
            "https://is4-ssl.mzstatic.com/image/thumb/Music126/v4/2a/19/fb/2a19fb85-2f70-9e44-f2a9-82abe679b88e/886449990061.jpg/400x400cc.jpg",
          coverarthq:
            "https://is4-ssl.mzstatic.com/image/thumb/Music126/v4/2a/19/fb/2a19fb85-2f70-9e44-f2a9-82abe679b88e/886449990061.jpg/400x400cc.jpg",
          joecolor: "b:d2c8adp:090f12s:3d2b16t:313431q:5b4a34",
        },
        hub: {
          type: "APPLEMUSIC",
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
          actions: [
            {
              name: "apple",
              type: "applemusicplay",
              id: "1615585006",
            },
            {
              name: "apple",
              type: "uri",
              uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/75/cb/12/75cb120e-8c33-42ac-00f0-c5bac8348236/mzaf_3329463923652745812.plus.aac.ep.m4a",
            },
          ],
          options: [
            {
              caption: "OPEN",
              actions: [
                {
                  name: "hub:applemusic:deeplink",
                  type: "applemusicopen",
                  uri: "https://music.apple.com/gb/album/late-night-talking/1615584999?i=1615585006&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
                {
                  name: "hub:applemusic:deeplink",
                  type: "uri",
                  uri: "https://music.apple.com/gb/album/late-night-talking/1615584999?i=1615585006&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
              ],
              beacondata: {
                type: "open",
                providername: "applemusic",
              },
              image:
                "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
              type: "open",
              listcaption: "Open in Apple Music",
              overflowimage:
                "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
              colouroverflowimage: false,
              providername: "applemusic",
            },
          ],
          explicit: false,
          displayname: "APPLE MUSIC",
        },
        artists: [
          {
            alias: "harry-styles",
            id: "42",
            adamid: "471260289",
          },
        ],
        url: "https://www.shazam.com/track/612684931/late-night-talking",
        highlightsurls: {},
        properties: {},
      },
      {
        layout: "5",
        type: "MUSIC",
        key: "11127316",
        title: "Dream On",
        subtitle: "Aerosmith",
        share: {
          subject: "Dream On - Aerosmith",
          text: "I used Shazam to discover Dream On by Aerosmith.",
          href: "https://www.shazam.com/track/11127316/dream-on",
          image:
            "https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/07/85/46/07854681-77e8-87d2-9382-241880e36e1e/074645736020.jpg/400x400cc.jpg",
          twitter: "I used @Shazam to discover Dream On by Aerosmith.",
          html: "https://www.shazam.com/snippets/email-share/11127316?lang=en&country=GB",
          avatar:
            "https://is5-ssl.mzstatic.com/image/thumb/Features115/v4/01/f9/9b/01f99bf8-66f8-9f4c-9ef8-91e55728d83a/mza_6690800116101211462.png/800x800cc.jpg",
          snapchat: "https://www.shazam.com/partner/sc/track/11127316",
        },
        images: {
          background:
            "https://is5-ssl.mzstatic.com/image/thumb/Features115/v4/01/f9/9b/01f99bf8-66f8-9f4c-9ef8-91e55728d83a/mza_6690800116101211462.png/800x800cc.jpg",
          coverart:
            "https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/07/85/46/07854681-77e8-87d2-9382-241880e36e1e/074645736020.jpg/400x400cc.jpg",
          coverarthq:
            "https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/07/85/46/07854681-77e8-87d2-9382-241880e36e1e/074645736020.jpg/400x400cc.jpg",
          joecolor: "b:4e4b76p:faf6eds:cbd2d9t:d7d4d5q:b2b7c5",
        },
        hub: {
          type: "APPLEMUSIC",
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
          actions: [
            {
              name: "apple",
              type: "applemusicplay",
              id: "217276979",
            },
            {
              name: "apple",
              type: "uri",
              uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/57/7f/26/577f26b5-36de-ccec-389c-47c875e3d134/mzaf_5495031620955907258.plus.aac.ep.m4a",
            },
          ],
          options: [
            {
              caption: "OPEN",
              actions: [
                {
                  name: "hub:applemusic:deeplink",
                  type: "applemusicopen",
                  uri: "https://music.apple.com/gb/album/dream-on/217276710?i=217276979&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
                {
                  name: "hub:applemusic:deeplink",
                  type: "uri",
                  uri: "https://music.apple.com/gb/album/dream-on/217276710?i=217276979&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
              ],
              beacondata: {
                type: "open",
                providername: "applemusic",
              },
              image:
                "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
              type: "open",
              listcaption: "Open in Apple Music",
              overflowimage:
                "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
              colouroverflowimage: false,
              providername: "applemusic",
            },
          ],
          explicit: false,
          displayname: "APPLE MUSIC",
        },
        artists: [
          {
            alias: "aerosmith",
            id: "42",
            adamid: "115386",
          },
        ],
        url: "https://www.shazam.com/track/11127316/dream-on",
        highlightsurls: {},
        properties: {},
      },
      {
        layout: "5",
        type: "MUSIC",
        key: "581828191",
        title: "Until I Found You",
        subtitle: "Stephen Sanchez",
        share: {
          subject: "Until I Found You - Stephen Sanchez",
          text: "I used Shazam to discover Until I Found You by Stephen Sanchez.",
          href: "https://www.shazam.com/track/581828191/until-i-found-you",
          image:
            "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/da/5f/06/da5f06f6-29bc-a6b0-2f84-c518d3b38d84/22UMGIM84514.rgb.jpg/400x400cc.jpg",
          twitter:
            "I used @Shazam to discover Until I Found You by Stephen Sanchez.",
          html: "https://www.shazam.com/snippets/email-share/581828191?lang=en&country=GB",
          avatar:
            "https://is5-ssl.mzstatic.com/image/thumb/Features115/v4/7b/9d/db/7b9ddb5d-c9c4-0320-7432-7aa861148a34/mzl.tgsppzxe.jpg/800x800cc.jpg",
          snapchat: "https://www.shazam.com/partner/sc/track/581828191",
        },
        images: {
          background:
            "https://is5-ssl.mzstatic.com/image/thumb/Features115/v4/7b/9d/db/7b9ddb5d-c9c4-0320-7432-7aa861148a34/mzl.tgsppzxe.jpg/800x800cc.jpg",
          coverart:
            "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/da/5f/06/da5f06f6-29bc-a6b0-2f84-c518d3b38d84/22UMGIM84514.rgb.jpg/400x400cc.jpg",
          coverarthq:
            "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/da/5f/06/da5f06f6-29bc-a6b0-2f84-c518d3b38d84/22UMGIM84514.rgb.jpg/400x400cc.jpg",
          joecolor: "b:b3c1cap:1f1f16s:242821t:3d3f3aq:414743",
        },
        hub: {
          type: "APPLEMUSIC",
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
          actions: [
            {
              name: "apple",
              type: "applemusicplay",
              id: "1638404502",
            },
            {
              name: "apple",
              type: "uri",
              uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/20/2e/9a/202e9ab2-56f6-1bcf-0f57-c5eea436bf1e/mzaf_8577263287954913095.plus.aac.ep.m4a",
            },
          ],
          options: [
            {
              caption: "OPEN",
              actions: [
                {
                  name: "hub:applemusic:deeplink",
                  type: "applemusicopen",
                  uri: "https://music.apple.com/gb/album/until-i-found-you/1638404210?i=1638404502&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
                {
                  name: "hub:applemusic:deeplink",
                  type: "uri",
                  uri: "https://music.apple.com/gb/album/until-i-found-you/1638404210?i=1638404502&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
              ],
              beacondata: {
                type: "open",
                providername: "applemusic",
              },
              image:
                "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
              type: "open",
              listcaption: "Open in Apple Music",
              overflowimage:
                "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
              colouroverflowimage: false,
              providername: "applemusic",
            },
          ],
          explicit: false,
          displayname: "APPLE MUSIC",
        },
        artists: [
          {
            alias: "stephen-sanchez",
            id: "42",
            adamid: "1276541872",
          },
        ],
        url: "https://www.shazam.com/track/581828191/until-i-found-you",
        highlightsurls: {},
        properties: {},
      },
      {
        layout: "5",
        type: "MUSIC",
        key: "99111081",
        title: "Somebody's Watching Me",
        subtitle: "Rockwell",
        share: {
          subject: "Somebody's Watching Me - Rockwell",
          text: "I used Shazam to discover Somebody's Watching Me by Rockwell.",
          href: "https://www.shazam.com/track/99111081/somebodys-watching-me",
          image:
            "https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/a5/19/0e/a5190eb7-3a36-c413-57e5-96961a99dd7d/21UMGIM51501.rgb.jpg/400x400cc.jpg",
          twitter:
            "I used @Shazam to discover Somebody's Watching Me by Rockwell.",
          html: "https://www.shazam.com/snippets/email-share/99111081?lang=en&country=GB",
          avatar:
            "https://is3-ssl.mzstatic.com/image/thumb/Features122/v4/c7/bb/a7/c7bba793-f7dc-c81f-eb67-da517aa19b97/mza_11830599779907422027.png/800x800cc.jpg",
          snapchat: "https://www.shazam.com/partner/sc/track/99111081",
        },
        images: {
          background:
            "https://is3-ssl.mzstatic.com/image/thumb/Features122/v4/c7/bb/a7/c7bba793-f7dc-c81f-eb67-da517aa19b97/mza_11830599779907422027.png/800x800cc.jpg",
          coverart:
            "https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/a5/19/0e/a5190eb7-3a36-c413-57e5-96961a99dd7d/21UMGIM51501.rgb.jpg/400x400cc.jpg",
          coverarthq:
            "https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/a5/19/0e/a5190eb7-3a36-c413-57e5-96961a99dd7d/21UMGIM51501.rgb.jpg/400x400cc.jpg",
          joecolor: "b:180e0cp:f9fffds:ea5f34t:cbceccq:c04f2c",
        },
        hub: {
          type: "APPLEMUSIC",
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
          actions: [
            {
              name: "apple",
              type: "applemusicplay",
              id: "1584390038",
            },
            {
              name: "apple",
              type: "uri",
              uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/27/e8/16/27e81682-baa1-e5f8-abf4-1f10137a65e0/mzaf_17288786360450527549.plus.aac.ep.m4a",
            },
          ],
          options: [
            {
              caption: "OPEN",
              actions: [
                {
                  name: "hub:applemusic:deeplink",
                  type: "applemusicopen",
                  uri: "https://music.apple.com/gb/album/somebodys-watching-me/1584389835?i=1584390038&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
                {
                  name: "hub:applemusic:deeplink",
                  type: "uri",
                  uri: "https://music.apple.com/gb/album/somebodys-watching-me/1584389835?i=1584390038&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
              ],
              beacondata: {
                type: "open",
                providername: "applemusic",
              },
              image:
                "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
              type: "open",
              listcaption: "Open in Apple Music",
              overflowimage:
                "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
              colouroverflowimage: false,
              providername: "applemusic",
            },
          ],
          explicit: false,
          displayname: "APPLE MUSIC",
        },
        artists: [
          {
            alias: "rockwell",
            id: "42",
            adamid: "659335004",
          },
        ],
        url: "https://www.shazam.com/track/99111081/somebodys-watching-me",
        highlightsurls: {},
        properties: {},
      },
      {
        layout: "5",
        type: "MUSIC",
        key: "624180456",
        title: "Super Freaky Girl",
        subtitle: "Nicki Minaj",
        share: {
          subject: "Super Freaky Girl - Nicki Minaj",
          text: "I used Shazam to discover Super Freaky Girl by Nicki Minaj.",
          href: "https://www.shazam.com/track/624180456/super-freaky-girl",
          image:
            "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/74/d9/a8/74d9a88e-9641-df34-401a-506b739bd824/22UMGIM87047.rgb.jpg/400x400cc.jpg",
          twitter:
            "I used @Shazam to discover Super Freaky Girl by Nicki Minaj.",
          html: "https://www.shazam.com/snippets/email-share/624180456?lang=en&country=GB",
          avatar:
            "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/42/ba/a9/42baa989-e090-3478-113a-e6b68efbf531/pr_source.png/800x800cc.jpg",
          snapchat: "https://www.shazam.com/partner/sc/track/624180456",
        },
        images: {
          background:
            "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/42/ba/a9/42baa989-e090-3478-113a-e6b68efbf531/pr_source.png/800x800cc.jpg",
          coverart:
            "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/74/d9/a8/74d9a88e-9641-df34-401a-506b739bd824/22UMGIM87047.rgb.jpg/400x400cc.jpg",
          coverarthq:
            "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/74/d9/a8/74d9a88e-9641-df34-401a-506b739bd824/22UMGIM87047.rgb.jpg/400x400cc.jpg",
          joecolor: "b:010101p:f1e7e8s:dca49dt:c1b9baq:b0837d",
        },
        hub: {
          type: "APPLEMUSIC",
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
          actions: [
            {
              name: "apple",
              type: "applemusicplay",
              id: "1638814465",
            },
            {
              name: "apple",
              type: "uri",
              uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/64/57/b8/6457b8d5-b6ef-f705-29d8-3a3d3d0655d4/mzaf_1124696944858493003.plus.aac.ep.m4a",
            },
          ],
          options: [
            {
              caption: "OPEN",
              actions: [
                {
                  name: "hub:applemusic:deeplink",
                  type: "applemusicopen",
                  uri: "https://music.apple.com/gb/album/super-freaky-girl/1638814204?i=1638814465&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
                {
                  name: "hub:applemusic:deeplink",
                  type: "uri",
                  uri: "https://music.apple.com/gb/album/super-freaky-girl/1638814204?i=1638814465&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
              ],
              beacondata: {
                type: "open",
                providername: "applemusic",
              },
              image:
                "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
              type: "open",
              listcaption: "Open in Apple Music",
              overflowimage:
                "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
              colouroverflowimage: false,
              providername: "applemusic",
            },
          ],
          explicit: true,
          displayname: "APPLE MUSIC",
        },
        artists: [
          {
            alias: "nicki-minaj",
            id: "42",
            adamid: "278464538",
          },
        ],
        url: "https://www.shazam.com/track/624180456/super-freaky-girl",
        highlightsurls: {},
        properties: {},
      },
      {
        layout: "5",
        type: "MUSIC",
        key: "607910713",
        title: "Ferrari",
        subtitle: "James Hype & Miggy Dela Rosa",
        share: {
          subject: "Ferrari - James Hype & Miggy Dela Rosa",
          text: "I used Shazam to discover Ferrari by James Hype & Miggy Dela Rosa.",
          href: "https://www.shazam.com/track/607910713/ferrari",
          image:
            "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/a9/02/ca/a902ca66-530d-d678-077c-17d9da7533ef/22UMGIM36635.rgb.jpg/400x400cc.jpg",
          twitter:
            "I used @Shazam to discover Ferrari by James Hype & Miggy Dela Rosa.",
          html: "https://www.shazam.com/snippets/email-share/607910713?lang=en&country=GB",
          avatar:
            "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/77/13/f4/7713f41b-e31e-32fe-df64-09671eb06661/pr_source.png/800x800cc.jpg",
          snapchat: "https://www.shazam.com/partner/sc/track/607910713",
        },
        images: {
          background:
            "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/77/13/f4/7713f41b-e31e-32fe-df64-09671eb06661/pr_source.png/800x800cc.jpg",
          coverart:
            "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/a9/02/ca/a902ca66-530d-d678-077c-17d9da7533ef/22UMGIM36635.rgb.jpg/400x400cc.jpg",
          coverarthq:
            "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/a9/02/ca/a902ca66-530d-d678-077c-17d9da7533ef/22UMGIM36635.rgb.jpg/400x400cc.jpg",
          joecolor: "b:121212p:ffffffs:fa0d13t:cfcfcfq:cb0e13",
        },
        hub: {
          type: "APPLEMUSIC",
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
          actions: [
            {
              name: "apple",
              type: "applemusicplay",
              id: "1617280597",
            },
            {
              name: "apple",
              type: "uri",
              uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/12/c3/5d/12c35dee-5ea7-9c51-580a-f2c5b85b9705/mzaf_2493936288894570132.plus.aac.ep.m4a",
            },
          ],
          options: [
            {
              caption: "OPEN",
              actions: [
                {
                  name: "hub:applemusic:deeplink",
                  type: "applemusicopen",
                  uri: "https://music.apple.com/gb/album/ferrari/1617280385?i=1617280597&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
                {
                  name: "hub:applemusic:deeplink",
                  type: "uri",
                  uri: "https://music.apple.com/gb/album/ferrari/1617280385?i=1617280597&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
              ],
              beacondata: {
                type: "open",
                providername: "applemusic",
              },
              image:
                "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
              type: "open",
              listcaption: "Open in Apple Music",
              overflowimage:
                "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
              colouroverflowimage: false,
              providername: "applemusic",
            },
          ],
          explicit: false,
          displayname: "APPLE MUSIC",
        },
        artists: [
          {
            alias: "james-hype",
            id: "42",
            adamid: "925734064",
          },
          {
            alias: "miggy-dela-rosa",
            id: "42",
            adamid: "762567296",
          },
        ],
        url: "https://www.shazam.com/track/607910713/ferrari",
        highlightsurls: {},
        properties: {},
      },
      {
        layout: "5",
        type: "MUSIC",
        key: "308021058",
        title: "Unstoppable",
        subtitle: "Sia",
        share: {
          subject: "Unstoppable - Sia",
          text: "I used Shazam to discover Unstoppable by Sia.",
          href: "https://www.shazam.com/track/308021058/unstoppable",
          image:
            "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/bc/13/27/bc13275c-8b26-802d-771b-d15ae00fb530/mzm.hvpwjsvi.jpg/400x400cc.jpg",
          twitter: "I used @Shazam to discover Unstoppable by Sia.",
          html: "https://www.shazam.com/snippets/email-share/308021058?lang=en&country=GB",
          avatar:
            "https://is1-ssl.mzstatic.com/image/thumb/Features115/v4/fa/52/dd/fa52ddb2-730b-c79d-4b6d-9590a9d75e52/pr_source.png/800x800cc.jpg",
          snapchat: "https://www.shazam.com/partner/sc/track/308021058",
        },
        images: {
          background:
            "https://is1-ssl.mzstatic.com/image/thumb/Features115/v4/fa/52/dd/fa52ddb2-730b-c79d-4b6d-9590a9d75e52/pr_source.png/800x800cc.jpg",
          coverart:
            "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/bc/13/27/bc13275c-8b26-802d-771b-d15ae00fb530/mzm.hvpwjsvi.jpg/400x400cc.jpg",
          coverarthq:
            "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/bc/13/27/bc13275c-8b26-802d-771b-d15ae00fb530/mzm.hvpwjsvi.jpg/400x400cc.jpg",
          joecolor: "b:0c0e0dp:eaccc1s:e8c4aat:bda69dq:bca08b",
        },
        hub: {
          type: "APPLEMUSIC",
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
          actions: [
            {
              name: "apple",
              type: "applemusicplay",
              id: "1055074639",
            },
            {
              name: "apple",
              type: "uri",
              uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/fc/b5/ba/fcb5ba61-51da-debf-fbdc-baabc7833715/mzaf_1274083596266863217.plus.aac.ep.m4a",
            },
          ],
          options: [
            {
              caption: "OPEN",
              actions: [
                {
                  name: "hub:applemusic:deeplink",
                  type: "applemusicopen",
                  uri: "https://music.apple.com/gb/album/unstoppable/1055074478?i=1055074639&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
                {
                  name: "hub:applemusic:deeplink",
                  type: "uri",
                  uri: "https://music.apple.com/gb/album/unstoppable/1055074478?i=1055074639&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
              ],
              beacondata: {
                type: "open",
                providername: "applemusic",
              },
              image:
                "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
              type: "open",
              listcaption: "Open in Apple Music",
              overflowimage:
                "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
              colouroverflowimage: false,
              providername: "applemusic",
            },
          ],
          explicit: false,
          displayname: "APPLE MUSIC",
        },
        artists: [
          {
            alias: "sia",
            id: "42",
            adamid: "28721078",
          },
        ],
        url: "https://www.shazam.com/track/308021058/unstoppable",
        highlightsurls: {},
        properties: {},
      },
      {
        layout: "5",
        type: "MUSIC",
        key: "634832101",
        title: "WORTH NOTHING (feat. Oliver Tree)",
        subtitle: "TWISTED",
        share: {
          subject: "WORTH NOTHING (feat. Oliver Tree) - TWISTED",
          text: "I used Shazam to discover WORTH NOTHING (feat. Oliver Tree) by TWISTED.",
          href: "https://www.shazam.com/track/634832101/worth-nothing-feat-oliver-tree",
          image:
            "https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/22/1f/b5/221fb536-593c-d897-0696-c06e4b8616f3/22UM1IM22545.rgb.jpg/400x400cc.jpg",
          twitter:
            "I used @Shazam to discover WORTH NOTHING (feat. Oliver Tree) by TWISTED.",
          html: "https://www.shazam.com/snippets/email-share/634832101?lang=en&country=GB",
          snapchat: "https://www.shazam.com/partner/sc/track/634832101",
        },
        images: {
          background:
            "https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/22/1f/b5/221fb536-593c-d897-0696-c06e4b8616f3/22UM1IM22545.rgb.jpg/400x400cc.jpg",
          coverart:
            "https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/22/1f/b5/221fb536-593c-d897-0696-c06e4b8616f3/22UM1IM22545.rgb.jpg/400x400cc.jpg",
          coverarthq:
            "https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/22/1f/b5/221fb536-593c-d897-0696-c06e4b8616f3/22UM1IM22545.rgb.jpg/400x400cc.jpg",
          joecolor: "b:1a0610p:e6dae3s:cdaebft:bdb0b9q:a98c9c",
        },
        hub: {
          type: "APPLEMUSIC",
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
          actions: [
            {
              name: "apple",
              type: "applemusicplay",
              id: "1650889523",
            },
            {
              name: "apple",
              type: "uri",
              uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/74/ae/67/74ae6789-eb84-84aa-6772-c624adb48884/mzaf_15235529366602780394.plus.aac.ep.m4a",
            },
          ],
          options: [
            {
              caption: "OPEN",
              actions: [
                {
                  name: "hub:applemusic:deeplink",
                  type: "applemusicopen",
                  uri: "https://music.apple.com/gb/album/worth-nothing-feat-oliver-tree/1650889244?i=1650889523&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
                {
                  name: "hub:applemusic:deeplink",
                  type: "uri",
                  uri: "https://music.apple.com/gb/album/worth-nothing-feat-oliver-tree/1650889244?i=1650889523&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
              ],
              beacondata: {
                type: "open",
                providername: "applemusic",
              },
              image:
                "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
              type: "open",
              listcaption: "Open in Apple Music",
              overflowimage:
                "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
              colouroverflowimage: false,
              providername: "applemusic",
            },
          ],
          explicit: true,
          displayname: "APPLE MUSIC",
        },
        artists: [
          {
            alias: "twisted",
            id: "42",
            adamid: "1647335679",
          },
        ],
        url: "https://www.shazam.com/track/634832101/worth-nothing-feat-oliver-tree",
        highlightsurls: {},
        properties: {},
      },
      {
        layout: "5",
        type: "MUSIC",
        key: "51013693",
        title: "Just Dance (feat. Colby O'Donis)",
        subtitle: "Lady Gaga",
        share: {
          subject: "Just Dance (feat. Colby O'Donis) - Lady Gaga",
          text: "I used Shazam to discover Just Dance (feat. Colby O'Donis) by Lady Gaga.",
          href: "https://www.shazam.com/track/51013693/just-dance-feat-colby-odonis",
          image:
            "https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/ee/cc/f0/eeccf026-4500-e5cb-1d96-bd5b4f0e23ad/08UMGIM13954.rgb.jpg/400x400cc.jpg",
          twitter:
            "I used @Shazam to discover Just Dance (feat. Colby O'Donis) by Lady Gaga.",
          html: "https://www.shazam.com/snippets/email-share/51013693?lang=en&country=GB",
          avatar:
            "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/2c/7d/5e/2c7d5ec0-bad6-5fb6-08f2-ccfd94aa2985/pr_source.png/800x800cc.jpg",
          snapchat: "https://www.shazam.com/partner/sc/track/51013693",
        },
        images: {
          background:
            "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/2c/7d/5e/2c7d5ec0-bad6-5fb6-08f2-ccfd94aa2985/pr_source.png/800x800cc.jpg",
          coverart:
            "https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/ee/cc/f0/eeccf026-4500-e5cb-1d96-bd5b4f0e23ad/08UMGIM13954.rgb.jpg/400x400cc.jpg",
          coverarthq:
            "https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/ee/cc/f0/eeccf026-4500-e5cb-1d96-bd5b4f0e23ad/08UMGIM13954.rgb.jpg/400x400cc.jpg",
          joecolor: "b:090d0ep:f0f1f3s:f6e2dat:c1c3c5q:c7b7b1",
        },
        hub: {
          type: "APPLEMUSIC",
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
          actions: [
            {
              name: "apple",
              type: "applemusicplay",
              id: "1440818653",
            },
            {
              name: "apple",
              type: "uri",
              uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/4a/a7/60/4aa76006-d297-2bcb-f201-6f75e9554c21/mzaf_15875176649468788968.plus.aac.ep.m4a",
            },
          ],
          options: [
            {
              caption: "OPEN",
              actions: [
                {
                  name: "hub:applemusic:deeplink",
                  type: "applemusicopen",
                  uri: "https://music.apple.com/gb/album/just-dance-feat-colby-odonis/1440818588?i=1440818653&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
                {
                  name: "hub:applemusic:deeplink",
                  type: "uri",
                  uri: "https://music.apple.com/gb/album/just-dance-feat-colby-odonis/1440818588?i=1440818653&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
              ],
              beacondata: {
                type: "open",
                providername: "applemusic",
              },
              image:
                "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
              type: "open",
              listcaption: "Open in Apple Music",
              overflowimage:
                "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
              colouroverflowimage: false,
              providername: "applemusic",
            },
          ],
          explicit: false,
          displayname: "APPLE MUSIC",
        },
        artists: [
          {
            alias: "lady-gaga",
            id: "42",
            adamid: "277293880",
          },
        ],
        url: "https://www.shazam.com/track/51013693/just-dance-feat-colby-odonis",
        highlightsurls: {},
        properties: {},
      },
      {
        layout: "5",
        type: "MUSIC",
        key: "269981000",
        title: "Forget",
        subtitle: "Pogo",
        share: {
          subject: "Forget - Pogo",
          text: "I used Shazam to discover Forget by Pogo.",
          href: "https://www.shazam.com/track/269981000/forget",
          image:
            "https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/0b/8a/00/0b8a00b9-d434-f2c9-ac9e-9e439059f481/859714991865_cover.jpg/400x400cc.jpg",
          twitter: "I used @Shazam to discover Forget by Pogo.",
          html: "https://www.shazam.com/snippets/email-share/269981000?lang=en&country=GB",
          avatar:
            "https://is2-ssl.mzstatic.com/image/thumb/Features115/v4/67/1f/74/671f7437-9993-c32c-a8aa-8d7564240315/pr_source.png/800x800cc.jpg",
          snapchat: "https://www.shazam.com/partner/sc/track/269981000",
        },
        images: {
          background:
            "https://is2-ssl.mzstatic.com/image/thumb/Features115/v4/67/1f/74/671f7437-9993-c32c-a8aa-8d7564240315/pr_source.png/800x800cc.jpg",
          coverart:
            "https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/0b/8a/00/0b8a00b9-d434-f2c9-ac9e-9e439059f481/859714991865_cover.jpg/400x400cc.jpg",
          coverarthq:
            "https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/0b/8a/00/0b8a00b9-d434-f2c9-ac9e-9e439059f481/859714991865_cover.jpg/400x400cc.jpg",
          joecolor: "b:163a41p:f5f2acs:dee8a3t:c8cd96q:b6c590",
        },
        hub: {
          type: "APPLEMUSIC",
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
          actions: [
            {
              name: "apple",
              type: "applemusicplay",
              id: "1018850626",
            },
            {
              name: "apple",
              type: "uri",
              uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/fb/6c/34/fb6c3424-68a7-0f66-70d7-c56bf7241e31/mzaf_16496890051022922967.plus.aac.ep.m4a",
            },
          ],
          options: [
            {
              caption: "OPEN",
              actions: [
                {
                  name: "hub:applemusic:deeplink",
                  type: "applemusicopen",
                  uri: "https://music.apple.com/gb/album/forget/1018850619?i=1018850626&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
                {
                  name: "hub:applemusic:deeplink",
                  type: "uri",
                  uri: "https://music.apple.com/gb/album/forget/1018850619?i=1018850626&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
              ],
              beacondata: {
                type: "open",
                providername: "applemusic",
              },
              image:
                "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
              type: "open",
              listcaption: "Open in Apple Music",
              overflowimage:
                "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
              colouroverflowimage: false,
              providername: "applemusic",
            },
          ],
          explicit: false,
          displayname: "APPLE MUSIC",
        },
        artists: [
          {
            alias: "pogo",
            id: "42",
            adamid: "215124992",
          },
        ],
        url: "https://www.shazam.com/track/269981000/forget",
        highlightsurls: {},
        properties: {},
      },
      {
        layout: "5",
        type: "MUSIC",
        key: "614356939",
        title: "Vegas (From the Original Motion Picture Soundtrack ELVIS)",
        subtitle: "Doja Cat",
        share: {
          subject:
            "Vegas (From the Original Motion Picture Soundtrack ELVIS) - Doja Cat",
          text: "I used Shazam to discover Vegas (From the Original Motion Picture Soundtrack ELVIS) by Doja Cat.",
          href: "https://www.shazam.com/track/614356939/vegas-from-the-original-motion-picture-soundtrack-elvis",
          image:
            "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/eb/17/f2/eb17f226-831a-b913-0435-748346326f10/196589096296.jpg/400x400cc.jpg",
          twitter:
            "I used @Shazam to discover Vegas (From the Original Motion Picture Soundtrack ELVIS) by Doja Cat.",
          html: "https://www.shazam.com/snippets/email-share/614356939?lang=en&country=GB",
          avatar:
            "https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/d7/a7/37/d7a73703-ee4b-29b7-8f22-64d7b88a31b6/pr_source.png/800x800cc.jpg",
          snapchat: "https://www.shazam.com/partner/sc/track/614356939",
        },
        images: {
          background:
            "https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/d7/a7/37/d7a73703-ee4b-29b7-8f22-64d7b88a31b6/pr_source.png/800x800cc.jpg",
          coverart:
            "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/eb/17/f2/eb17f226-831a-b913-0435-748346326f10/196589096296.jpg/400x400cc.jpg",
          coverarthq:
            "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/eb/17/f2/eb17f226-831a-b913-0435-748346326f10/196589096296.jpg/400x400cc.jpg",
          joecolor: "b:080808p:ebc4a0s:dbb677t:bd9e82q:b19361",
        },
        hub: {
          type: "APPLEMUSIC",
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
          actions: [
            {
              name: "apple",
              type: "applemusicplay",
              id: "1622065027",
            },
            {
              name: "apple",
              type: "uri",
              uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/50/0b/78/500b78e1-3d78-b634-fd90-1892533f5cc9/mzaf_584002463352351814.plus.aac.ep.m4a",
            },
          ],
          options: [
            {
              caption: "OPEN",
              actions: [
                {
                  name: "hub:applemusic:deeplink",
                  type: "applemusicopen",
                  uri: "https://music.apple.com/gb/album/vegas-from-the-original-motion-picture-soundtrack-elvis/1622064872?i=1622065027&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
                {
                  name: "hub:applemusic:deeplink",
                  type: "uri",
                  uri: "https://music.apple.com/gb/album/vegas-from-the-original-motion-picture-soundtrack-elvis/1622064872?i=1622065027&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
              ],
              beacondata: {
                type: "open",
                providername: "applemusic",
              },
              image:
                "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
              type: "open",
              listcaption: "Open in Apple Music",
              overflowimage:
                "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
              colouroverflowimage: false,
              providername: "applemusic",
            },
          ],
          explicit: true,
          displayname: "APPLE MUSIC",
        },
        artists: [
          {
            alias: "doja-cat",
            id: "42",
            adamid: "830588310",
          },
        ],
        url: "https://www.shazam.com/track/614356939/vegas-from-the-original-motion-picture-soundtrack-elvis",
        highlightsurls: {},
        properties: {},
      },
      {
        layout: "5",
        type: "MUSIC",
        key: "618322930",
        title: "DON'T YOU WORRY",
        subtitle: "Black Eyed Peas, Shakira & David Guetta",
        share: {
          subject: "DON'T YOU WORRY - Black Eyed Peas, Shakira & David Guetta",
          text: "I used Shazam to discover DON'T YOU WORRY by Black Eyed Peas, Shakira & David Guetta.",
          href: "https://www.shazam.com/track/618322930/dont-you-worry",
          image:
            "https://is3-ssl.mzstatic.com/image/thumb/Music122/v4/d3/af/8a/d3af8aca-421a-e197-5667-8b8c47e77b3c/196589185839.jpg/400x400cc.jpg",
          twitter:
            "I used @Shazam to discover DON'T YOU WORRY by Black Eyed Peas, Shakira & David Guetta.",
          html: "https://www.shazam.com/snippets/email-share/618322930?lang=en&country=GB",
          avatar:
            "https://is3-ssl.mzstatic.com/image/thumb/AMCArtistImages122/v4/bd/48/51/bd485116-05fc-e6a8-f546-8702bdccba3c/626ec0a6-c499-4813-b32b-0990a7bf9d13_ami-identity-03c769e8900fce36c934e8f3fa55c9d8-2022-10-28T16-37-01.964Z_cropped.png/800x800cc.jpg",
          snapchat: "https://www.shazam.com/partner/sc/track/618322930",
        },
        images: {
          background:
            "https://is3-ssl.mzstatic.com/image/thumb/AMCArtistImages122/v4/bd/48/51/bd485116-05fc-e6a8-f546-8702bdccba3c/626ec0a6-c499-4813-b32b-0990a7bf9d13_ami-identity-03c769e8900fce36c934e8f3fa55c9d8-2022-10-28T16-37-01.964Z_cropped.png/800x800cc.jpg",
          coverart:
            "https://is3-ssl.mzstatic.com/image/thumb/Music122/v4/d3/af/8a/d3af8aca-421a-e197-5667-8b8c47e77b3c/196589185839.jpg/400x400cc.jpg",
          coverarthq:
            "https://is3-ssl.mzstatic.com/image/thumb/Music122/v4/d3/af/8a/d3af8aca-421a-e197-5667-8b8c47e77b3c/196589185839.jpg/400x400cc.jpg",
          joecolor: "b:71605dp:ffffffs:ecddcet:e2dfdeq:d3c4b8",
        },
        hub: {
          type: "APPLEMUSIC",
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
          actions: [
            {
              name: "apple",
              type: "applemusicplay",
              id: "1651268420",
            },
            {
              name: "apple",
              type: "uri",
              uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/a9/e8/43/a9e84396-1fb2-ea7f-c149-2f289cbacd9e/mzaf_8253706645520413048.plus.aac.ep.m4a",
            },
          ],
          options: [
            {
              caption: "OPEN",
              actions: [
                {
                  name: "hub:applemusic:deeplink",
                  type: "applemusicopen",
                  uri: "https://music.apple.com/gb/album/dont-you-worry/1651267735?i=1651268420&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
                {
                  name: "hub:applemusic:deeplink",
                  type: "uri",
                  uri: "https://music.apple.com/gb/album/dont-you-worry/1651267735?i=1651268420&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
              ],
              beacondata: {
                type: "open",
                providername: "applemusic",
              },
              image:
                "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
              type: "open",
              listcaption: "Open in Apple Music",
              overflowimage:
                "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
              colouroverflowimage: false,
              providername: "applemusic",
            },
          ],
          explicit: false,
          displayname: "APPLE MUSIC",
        },
        artists: [
          {
            alias: "black-eyed-peas",
            id: "42",
            adamid: "360391",
          },
          {
            alias: "shakira",
            id: "42",
            adamid: "889327",
          },
          {
            alias: "david-guetta",
            id: "42",
            adamid: "5557599",
          },
        ],
        url: "https://www.shazam.com/track/618322930/dont-you-worry",
        highlightsurls: {},
        properties: {},
      },
      {
        layout: "5",
        type: "MUSIC",
        key: "614341353",
        title: "Tití Me Preguntó",
        subtitle: "Bad Bunny",
        share: {
          subject: "Tití Me Preguntó - Bad Bunny",
          text: "I used Shazam to discover Tití Me Preguntó by Bad Bunny.",
          href: "https://www.shazam.com/track/614341353/tit%C3%AD-me-pregunt%C3%B3",
          image:
            "https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/3e/04/eb/3e04ebf6-370f-f59d-ec84-2c2643db92f1/196626945068.jpg/400x400cc.jpg",
          twitter: "I used @Shazam to discover Tití Me Preguntó by Bad Bunny.",
          html: "https://www.shazam.com/snippets/email-share/614341353?lang=en&country=GB",
          avatar:
            "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/46/76/b0/4676b074-0a3b-a056-74f2-a83f752e290e/pr_source.png/800x800cc.jpg",
          snapchat: "https://www.shazam.com/partner/sc/track/614341353",
        },
        images: {
          background:
            "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/46/76/b0/4676b074-0a3b-a056-74f2-a83f752e290e/pr_source.png/800x800cc.jpg",
          coverart:
            "https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/3e/04/eb/3e04ebf6-370f-f59d-ec84-2c2643db92f1/196626945068.jpg/400x400cc.jpg",
          coverarthq:
            "https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/3e/04/eb/3e04ebf6-370f-f59d-ec84-2c2643db92f1/196626945068.jpg/400x400cc.jpg",
          joecolor: "b:fcc2c1p:170a0bs:21201et:452f2fq:4d403e",
        },
        hub: {
          type: "APPLEMUSIC",
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
          actions: [
            {
              name: "apple",
              type: "applemusicplay",
              id: "1622045635",
            },
            {
              name: "apple",
              type: "uri",
              uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/71/8d/43/718d4318-e091-2897-3594-2dcd30af8888/mzaf_16799470290653602820.plus.aac.ep.m4a",
            },
          ],
          options: [
            {
              caption: "OPEN",
              actions: [
                {
                  name: "hub:applemusic:deeplink",
                  type: "applemusicopen",
                  uri: "https://music.apple.com/gb/album/tit%C3%AD-me-pregunt%C3%B3/1622045624?i=1622045635&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
                {
                  name: "hub:applemusic:deeplink",
                  type: "uri",
                  uri: "https://music.apple.com/gb/album/tit%C3%AD-me-pregunt%C3%B3/1622045624?i=1622045635&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
              ],
              beacondata: {
                type: "open",
                providername: "applemusic",
              },
              image:
                "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
              type: "open",
              listcaption: "Open in Apple Music",
              overflowimage:
                "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
              colouroverflowimage: false,
              providername: "applemusic",
            },
          ],
          explicit: false,
          displayname: "APPLE MUSIC",
        },
        artists: [
          {
            alias: "bad-bunny",
            id: "42",
            adamid: "1126808565",
          },
        ],
        url: "https://www.shazam.com/track/614341353/tit%C3%AD-me-pregunt%C3%B3",
        highlightsurls: {},
        properties: {},
      },
      {
        layout: "5",
        type: "MUSIC",
        key: "613712199",
        title: "No Se Va (En Vivo)",
        subtitle: "Grupo Frontera",
        share: {
          subject: "No Se Va (En Vivo) - Grupo Frontera",
          text: "I used Shazam to discover No Se Va (En Vivo) by Grupo Frontera.",
          href: "https://www.shazam.com/track/613712199/no-se-va-en-vivo",
          image:
            "https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/90/03/7b/90037bd5-e06d-a52f-46a5-76bafc20dde8/cover.jpg/400x400cc.jpg",
          twitter:
            "I used @Shazam to discover No Se Va (En Vivo) by Grupo Frontera.",
          html: "https://www.shazam.com/snippets/email-share/613712199?lang=en&country=GB",
          snapchat: "https://www.shazam.com/partner/sc/track/613712199",
        },
        images: {
          background:
            "https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/90/03/7b/90037bd5-e06d-a52f-46a5-76bafc20dde8/cover.jpg/400x400cc.jpg",
          coverart:
            "https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/90/03/7b/90037bd5-e06d-a52f-46a5-76bafc20dde8/cover.jpg/400x400cc.jpg",
          coverarthq:
            "https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/90/03/7b/90037bd5-e06d-a52f-46a5-76bafc20dde8/cover.jpg/400x400cc.jpg",
          joecolor: "b:000000p:fcfcfcs:91b6dbt:c9c9c9q:7491af",
        },
        hub: {
          type: "APPLEMUSIC",
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
          actions: [
            {
              name: "apple",
              type: "applemusicplay",
              id: "1647019552",
            },
            {
              name: "apple",
              type: "uri",
              uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/77/c2/b0/77c2b088-ae69-9c77-f8a1-aa12d9fd14e5/mzaf_9385059481718220903.plus.aac.ep.m4a",
            },
          ],
          options: [
            {
              caption: "OPEN",
              actions: [
                {
                  name: "hub:applemusic:deeplink",
                  type: "applemusicopen",
                  uri: "https://music.apple.com/gb/album/no-se-va-en-vivo/1647019547?i=1647019552&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
                {
                  name: "hub:applemusic:deeplink",
                  type: "uri",
                  uri: "https://music.apple.com/gb/album/no-se-va-en-vivo/1647019547?i=1647019552&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
              ],
              beacondata: {
                type: "open",
                providername: "applemusic",
              },
              image:
                "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
              type: "open",
              listcaption: "Open in Apple Music",
              overflowimage:
                "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
              colouroverflowimage: false,
              providername: "applemusic",
            },
          ],
          explicit: false,
          displayname: "APPLE MUSIC",
        },
        artists: [
          {
            alias: "grupo-frontera",
            id: "42",
            adamid: "1613772487",
          },
        ],
        url: "https://www.shazam.com/track/613712199/no-se-va-en-vivo",
        highlightsurls: {},
        properties: {},
      },
      {
        layout: "5",
        type: "MUSIC",
        key: "624596103",
        title: "DESPECHÁ",
        subtitle: "ROSALÍA",
        share: {
          subject: "DESPECHÁ - ROSALÍA",
          text: "I used Shazam to discover DESPECHÁ by ROSALÍA.",
          href: "https://www.shazam.com/track/624596103/despech%C3%A1",
          image:
            "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/46/1d/66/461d668b-32e7-6642-158e-b6e7b74c95de/196589348883.jpg/400x400cc.jpg",
          twitter: "I used @Shazam to discover DESPECHÁ by ROSALÍA.",
          html: "https://www.shazam.com/snippets/email-share/624596103?lang=en&country=GB",
          avatar:
            "https://is5-ssl.mzstatic.com/image/thumb/Music126/v4/eb/94/4a/eb944a40-9438-f7d2-1822-aae4a697c5e0/pr_source.png/800x800cc.jpg",
          snapchat: "https://www.shazam.com/partner/sc/track/624596103",
        },
        images: {
          background:
            "https://is5-ssl.mzstatic.com/image/thumb/Music126/v4/eb/94/4a/eb944a40-9438-f7d2-1822-aae4a697c5e0/pr_source.png/800x800cc.jpg",
          coverart:
            "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/46/1d/66/461d668b-32e7-6642-158e-b6e7b74c95de/196589348883.jpg/400x400cc.jpg",
          coverarthq:
            "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/46/1d/66/461d668b-32e7-6642-158e-b6e7b74c95de/196589348883.jpg/400x400cc.jpg",
          joecolor: "b:161711p:f1b68es:39a8f0t:c59675q:328bc3",
        },
        hub: {
          type: "APPLEMUSIC",
          image:
            "https://images.shazam.com/static/icons/hub/web/v5/applemusic.png",
          actions: [
            {
              name: "apple",
              type: "applemusicplay",
              id: "1636782444",
            },
            {
              name: "apple",
              type: "uri",
              uri: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/fd/c9/6e/fdc96e83-167f-44cd-b3ae-188d67ee9ae8/mzaf_12623277209011301064.plus.aac.ep.m4a",
            },
          ],
          options: [
            {
              caption: "OPEN",
              actions: [
                {
                  name: "hub:applemusic:deeplink",
                  type: "applemusicopen",
                  uri: "https://music.apple.com/gb/album/despech%C3%A1/1636782253?i=1636782444&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
                {
                  name: "hub:applemusic:deeplink",
                  type: "uri",
                  uri: "https://music.apple.com/gb/album/despech%C3%A1/1636782253?i=1636782444&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web",
                },
              ],
              beacondata: {
                type: "open",
                providername: "applemusic",
              },
              image:
                "https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png",
              type: "open",
              listcaption: "Open in Apple Music",
              overflowimage:
                "https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png",
              colouroverflowimage: false,
              providername: "applemusic",
            },
          ],
          explicit: false,
          displayname: "APPLE MUSIC",
        },
        artists: [
          {
            alias: "rosal%C3%ADa",
            id: "42",
            adamid: "313845115",
          },
        ],
        url: "https://www.shazam.com/track/624596103/despech%C3%A1",
        highlightsurls: {},
        properties: {},
      },
    ]);
  }, []);

  // useEffect(() => {
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       "X-RapidAPI-Key": "2e445e07b9mshede7d00d0b93695p127d1ajsn6e681578ac80",
  //       "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
  //     },
  //   };

  //   fetch("https://shazam-core.p.rapidapi.com/v1/charts/world", options)
  //     .then((response) => response.json())
  //     .then((response) => setMusic(response))
  //     .catch((err) => console.error(err));

  // }, []);
  // console.log(music);

  return (
    <section className="bg-black ml-24 py-4 space-y-8 md:max-w-6xl flex-grow md:mr-2.5">
      <Search search={search} setSearch={setSearch} />
      <div className="grid overflow-y-scroll scrollbar-hide h-96 py-0 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 p-4">
        {search.length === 0
          ? music
              .slice(0, 4)
              .map((track, i) => (
                <Poster key={i} track={track} chooseTrack={chooseTrack} />
              ))
          : "Loading"}
      </div>

      <div className="flex gap-x-8 absolute min-w-full md:relative ml-6">

        {/* Genres */}
        <div className="hidden xl:inline max-w-[270px]">
          <h2 className="text-white font-bold mb-3">Genres</h2>
          <div className="flex gap-x-2 gap-y-2.5 flex-wrap mb-3">
            {genres.map((genre, i) => (
              <div key={i} className="genre">{genre}</div>
            ))}
          </div>
          <button className="text-[#CECECE] bg-[#1A1A1A] text-[13px] py-3.5 px-4 rounded-2xl w-full font-bold bg-opacity-80 hover:bg-opacity-100 transition ease-out">
            All Genres
          </button>
        </div>

        <div className=" w-max sm:w-full  pr-11">
          <h2 className="text-white font-bold mb-3">
            {searchResults.length === 0 ? "New Releases" : "Tracks"}
          </h2>
          <div className="space-y-3 border-2 border-[#262626] rounded-2xl p-3 bg-[#0D0D0D] overflow-y-scroll h-[1000px] md:h-96 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-thumb-rounded hover:scrollbar-thumb-gray-500  w-[530px] sm:w-[830px]">
            {searchResults.length === 0 &&
              music
                .slice(4, music.length)
                .map((track, i) => (
                  <Track key={i} track={track} chooseTrack={chooseTrack} />
                ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Body;
