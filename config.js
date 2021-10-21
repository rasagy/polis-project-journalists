var config = {
    style: 'mapbox://styles/rasagy/cku6tkhjb1qh119ns1wxtds68',
    accessToken: 'pk.eyJ1IjoicmFzYWd5IiwiYSI6ImNrdTczOGdkMzJtbTIzMHBjdHAzZzRtaWwifQ.QSqkuIWhe2sanGurskKM8A',
    showMarkers: false,
    theme: 'light',
    title: 'Mapping patterns of violence against journalists in India',
    subtitle: 'Visualizing events between 2019–2021',
    byline: '',
    footer: 'Read further to know more about these events, and the journalists who faced violence during these events.',
    // '<h2>Violence faced by journalists</h2>'+
    // '<h3>Conflict in Kashmir</h3><p>Over the last few years, journalists in Jammu and Kashmir have been subjected to various kinds of violence for doing their jobs. Journalists have been grappling with the basic issues of personal safety and the right to report facts. Reporters and journalists on the ground have to deal with the ordeal of reporting in the midst of a media blackout, a military siege and a pandemic. They are often subjected to physical assault at the hands of the Jammu and Kashmir Police and army personnel and charged under draconian laws. Systemic threats, intimidation, harassment, physical assault and gag orders are placed on journalists in Jammu and Kashmir by the authorities. Funding for journalists and media organizations are cut if they don’t toe the Government line. On 5 August 2019, the Indian Government stripped Jammu and Kashmir of its semi-autonomous status by abrogating Article 370 of the Constitution. An internet and communications shutdown was imposed in Jammu and Kashmir that continued for more than six months In 2020, a new media policy was released by the Jammu and Kashmir administration, aimed at “creating a sustained narrative on the functioning of the government in media”. Among other provisions in the new media policy, which seek to regulate reporting in the new Union Territory, is a mechanism which empowers the Government to decide what is “anti-social and anti-national” news. On 14 June 2018, Shujaat Bukhari, one of the founding journalists of the Rising Kashmir: the second largest newspaper in Jammu and Kashmir was killed in Srinagar. There have been no clear answers to explain the reason for his killing. On 27 August 2018, the Jammu and Kashmir Police took Aasif Sultan into custody and formally arrested him a few days later. In February 2019, the Police filed a charge sheet accusing him of harboring militants. Three years on, he is still detained at the Srinagar Central Jail as his case proceeds through the courts. Sultan, a journalist with the monthly magazine Kashmir Narrator, is being tried for “complicity” in “harboring known terrorists” under the Unlawful Activities (Prevention) Act in Srinagar. In May 2021, authorities in Kashmir issued directions to the health services department to not speak to journalists about the COVID-19 situation. In August 2021, journalists were assaulted when they were documenting the Muharram procession in Srinagar. Journalists in Kashmir work in an atmosphere of fear, repression and at the risk of violence as the State functions with impunity.</p>'+
    // '<h4>List of journalists who faced violence while covering conflict in Kashmir:</h4>'+
    // '<ul><li>On <a href="#">17 December 2019</a>, Aazan Javid of The Print and Anees Zargar of NewsClick, were physically assaulted by the Police while they were covering a protest in Srinagar.</li>'+
    // '<li>On  <a href="#">30 November 2019</a>, Hakeem Irfan of The Economic Times and Basharat Masood of The Indian Express were summoned by the police and questioned about the sources of their stories.</li>'+
    // '<li>On  <a href="#">23 December 2019</a>, Basharat Masood and Safwat Zargar (Scroll.in) were stopped by the Police in Handwara, while they were on an assignment, taken to the office of the SP and questioned.</li>'+
    // '<li>More than twelve journalists including Waseem Andrabi, Bhat Burhan and Sajad Hameed were blocked, harassed and beaten up when they were covering the Muharram procession in Srinagar on 17 August 2021. Many were injured their equipment damaged. </li>'+
    // '<li>In March 2021, Saqib Majeed (freelancer) and Shafat Farooq (BBC Urdu), two photojournalists, alleged attacks by police while they filmed stones being hurled at police outside the Jamia Masjid in Srinagar.</li>'+
    // '<li>On 8 February 2020, Naseer Ganie of Outlook and Haroon Nabi were summoned by the Police and questioned about reporting on a statement issued by J&K Liberation Front (JKLF), which has been banned by the government.</li>'+
    // '<li>Fayaz Lolu (ETV Bharat), Mudasir Qadri (News18 Urdu) and Junaid Rafiq (TV 9) were detained and assaulted by the Police when covering the District Development Council polls in Anantnag, South Kashmir.</li>'+
    // '<li>FIRs have been filed against Sajad Gul and Gowhar Geelani (freelancers), The Kashmir Walla, The Kashmiriyat, Peerzada Ashiq (The Hindu), Sajid Raina (Kashmir News Observer).</li>'+
    // '<li>Qazi Shibli (The Kashmiriyat) has been arrested twice, Ghulam Jeelani Qadri (Daily Afaaq) has also been arrested, Irfan Amin Malik (Rising Kashmir) detained and questioned twice, Kamran Yousuf (NewsClick) also detained and Masrat Zahra charged under UAPA, and a female journalist summoned.</li>'+
    // '<li>Those physically assaulted, harassed and intimidated include independent journalists Qisar Mir, Mushtaq Ahmed, Gowhar Ali Wani, Aakash Hassan, Anuradha Bhasin (Kashmir Times) and Fahad Shah (The Kashmir Walla).</li></ul>',
    chapters: [
      {
          id: 'overall',
          alignment: 'center',
          title: 'All around the country, journalists face violence.',
          image: '',
          description: "Between July 2019 to August 2021, <b>228</b> journalists were impacted while covering various events across India.",
          location: {
            center: [78.39148, 23.23709],
            zoom: 3.96,
            pitch: 0.00,
            bearing: 0.00
          },
          onChapterEnter: [
              {
                  layer: 'polis-overall-c',
                  opacity:  0.8
              }
          ],
          onChapterExit: [
              {
                  layer: 'polis-overall-c',
                  opacity: 0
              }
          ]
      },
      {
          id: 'kashmir',
          alignment: 'right',
          title: 'Conflict in Jammu & Kashmir',
          image: '',
          description: 'Over the last few years, journalists in Jammu & Kashmir have been grappling with the basic issues of personal safety and the right to report facts. Reporters and journalists on the ground struggle to report in the midst of a media blackout, a military siege and a pandemic.<p>'+
          'Journalists are often subjected to <b>physical assault</b> at the hands of the Army and the Jammu & Kashmir Police and regularly <b>charged under draconian laws</b>.',
          // '<ul><li>On 14 June 2018, Shujaat Bukhari, a prominent journalist and one of the founders of Rising Kashmir, was killed in Srinagar. Investigations regarding the killing have been inconclusive and there have been no clear answers.</li></ul>',
          location: {
            center: [75.60629, 33.31380],
            zoom: 6.07,
            pitch: 0.00,
            bearing: 0.00
          },
          onChapterEnter: [
              {
                  layer: 'polis-kashmir-c',
                  opacity:  0.8
              },
              {
                  layer: 'polis-kashmir-l',
                  opacity: 1
              }
          ],
          onChapterExit: [
              {
                  layer: 'polis-kashmir-c',
                  opacity: 0
              },
              {
                  layer: 'polis-kashmir-l',
                  opacity: 0
              }
          ]
      },
      {
          id: 'caa',
          alignment: 'right',
          title: 'Anti-CAA protests',
          image: '',
          description: 'On 11 December, 2019 the Indian Parliament passed the Citizenship Amendment Act (CAA) and the National Register of Citizens (NRC). These laws fast-track granting citizenship to illegal migrants from India’s neighboring countries except if they are Muslim. The passing of the CAA and the NRC sparked peaceful protests across the country that the Police countered with disproportionate violence. In Delhi, peaceful sit-ins gained momentum and widespread media coverage. <p>The anti-CAA protests marked the first unified act of dissent against the ruling Government since it was first elected in 2014 and journalists covering this significant moment in history were subjected to <b>threats</b>, <b>intimidation</b>, <b>FIRs</b> and <b>assault by the Police</b>. ',
          location: {
            center: [84.27144, 26.52720],
            zoom: 4.84,
            pitch: 0.00,
            bearing: 0.00
          },
          onChapterEnter: [
              {
                  layer: 'polis-caa-c',
                  opacity:  0.8
              },
              {
                  layer: 'polis-caa-l',
                  opacity: 1
              }
          ],
          onChapterExit: [
              {
                  layer: 'polis-caa-c',
                  opacity: 0
              },
              {
                  layer: 'polis-caa-l',
                  opacity: 0
              }
          ]
      },
      {
          id: 'delhi',
          alignment: 'right',
          title: 'Delhi Pogrom',
          image: '',
          description: 'On 23 February 2020, in the context of the anti-CAA/NRC protests, violence broke out in North East Delhi and spread across many neighborhoods in the city. The violence lasted for four days and left 53 people dead, of whom 39 were Muslims. <p>Journalists covering the Delhi Pogrom were subjected to varying degrees of violence including <b>threats, intimidation, physical assault and attacks</b>. There were reports of journalists being stopped and asked for their names and religious identities, several others were at the receiving end of <b>mob violence</b>. <p>In a situation where the State machinery was complicit in the communal violence that engulfed North East Delhi, journalists on the ground were left to fend for themselves and continue doing their jobs at great personal risk.',
          location: {
            center: [77.20469, 28.60891],
            zoom: 7.91,
            pitch: 0.00,
            bearing: 0.00
          },
          onChapterEnter: [
              {
                  layer: 'polis-delhi-c',
                  opacity:  0.8
              },
              {
                  layer: 'polis-delhi-l',
                  opacity: 1
              }
          ],
          onChapterExit: [
              {
                  layer: 'polis-delhi-c',
                  opacity: 0
              },
              {
                  layer: 'polis-delhi-l',
                  opacity: 0
              }
          ]
      },
      {
          id: 'covid',
          alignment: 'right',
          title: 'COVID-19 coverage',
          image: '',
          description: 'On 24 March 2020, the Indian Government imposed a strict nationwide lockdown with no warning for preparation. The Police enforced the curfew with unrestrained violence and videos of this brutality emerged online immediately. The Indian Government tried to suppress the reporting of COVID-19 ground realities by forcing journalists to publish only pre-approved information. Similarly, during the second wave of COVID-19 in India in 2021, journalists who have been painstakingly reporting from the field and who questioned the Government’s apathy and negligence have been <b>threatened</b> and accused of spreading rumors about the public health crisis. <b>FIRs, summons, physical attacks, threats and intimidation</b> were some of the common patterns of violence against journalists who reported on issues related to the pandemic.',
          location: {
            center: [77.03104, 23.18047],
            zoom: 4.06,
            pitch: 0.00,
            bearing: 0.00
          },
          onChapterEnter: [
              {
                  layer: 'polis-covid-c',
                  opacity:  0.8
              },
              {
                  layer: 'polis-covid-l',
                  opacity: 1
              }
          ],
          onChapterExit: [
              {
                  layer: 'polis-covid-c',
                  opacity: 0
              },
              {
                  layer: 'polis-covid-l',
                  opacity: 0
              }
          ]
      },
      {
          id: 'farmer',
          alignment: 'right',
          title: 'Farmers’ Protest',
          image: '',
          description: 'On 20 September 2020, Rajya Sabha, the upper house of the Indian Parliament, passed in a haste by a voice vote three Farm Bills. Opposition parties and farmers’ unions protested the decision since the aim of the Bill is to push the agricultural sector in India from a government-run to a private-run sector. Farmers’ unions strongly oppose these Bills and demanded their complete revocation. Farmers have organized peaceful marches, sit-in protests and contestations across the country. The State resorted to tactics of repression and violence to counter the protests. <p><b>First Information Reports (FIRs)</b> have been filed against those who protested and the Police <b>arrested</b> journalists, labor union representatives and farmers. <b>Police brutality and custodial violence</b> have been routinely used against protesting farmers and those who have been arrested.',
          location: {
            center: [79.17956, 22.73837],
            zoom: 4.75,
            pitch: 0.00,
            bearing: 0.00
          },
          onChapterEnter: [
              {
                  layer: 'polis-farmer-c',
                  opacity:  0.8
              },
              {
                  layer: 'polis-farmer-l',
                  opacity: 1
              }
          ],
          onChapterExit: [
              {
                  layer: 'polis-farmer-c',
                  opacity: 0
              },
              {
                  layer: 'polis-farmer-l',
                  opacity: 0
              }
          ]
      },
      {
          id: 'general',
          alignment: 'right',
          title: '…and many other reasons',
          image: '',
          description: 'Ever since Prime Minister Narendra Modi’s Bharatiya Janata Party was re-elected in 2019, pressure has increased on the media to toe the Hindu nationalist government’s line. The <b>coordinated hate campaigns</b> waged on social networks against journalists who question the Government or uncover the truth behind the Government’s actions elicit calls for the journalists concerned to be murdered. The campaigns are particularly violent when the targets are women. <b>Criminal prosecutions</b> are often used to gag journalists critical of the authorities, with some prosecutors invoking Section 124a of the penal code, under which “sedition” is punishable by life imprisonment. Journalists who’ve reported on crucial and sensitive issues have been <b>attacked, assaulted</b> and in some cases <b>killed</b> for their work. It is important to understand the everyday, isolated instances, where journalists are made the targets of violence. These instances might not be reported, but the threat of violence is ever present.',
          location: {
            center: [78.54067, 22.07983],
            zoom: 4.13,
            pitch: 0.00,
            bearing: 0.00
          },
          onChapterEnter: [
              {
                  layer: 'polis-general-c',
                  opacity:  0.8
              },
              {
                  layer: 'polis-general-l',
                  opacity: 1
              }
          ],
          onChapterExit: [
              {
                  layer: 'polis-general-c',
                  opacity: 0
              },
              {
                  layer: 'polis-general-l',
                  opacity: 0
              }
          ]
      }
    ]
};
