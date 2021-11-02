var config = {
    style: 'mapbox://styles/rasagy/cku6tkhjb1qh119ns1wxtds68',
    accessToken: 'pk.eyJ1IjoicmFzYWd5IiwiYSI6ImNrdTczOGdkMzJtbTIzMHBjdHAzZzRtaWwifQ.QSqkuIWhe2sanGurskKM8A',
    showMarkers: false,
    theme: 'light',
    title: 'Mapping patterns of violence against journalists in India',
    subtitle: '',
    byline: '(May 2019 — August 2021)',
    footer: "",
    chapters: [
      {
          id: 'overall',
          alignment: 'center',
          title: 'All around the country, journalists face violence.',
          image: 'assets/protest.png',
          description: "From May 2019 to August 2021, Watch the State (WTS) at The Polis Project documented <b>256 reported instances</b> of violence against journalists. <p>Scroll through to get a glimpse of some of the key events and the violence faced by journalists.<p><i>Photo: Protest against violence on journalists in India. Source: The Guardian</i>",
          location: {
            center: [78.39148, 23.23709],
            zoom: 3.7,
            pitch: 30.00,
            bearing: 0.00
          },
          onChapterEnter: [
              {
                  layer: 'polis-overall-c',
                  opacity:  0.75
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
          title: 'Jammu and Kashmir (51)',
          image: 'assets/kashmir.jpg',
          description: 'Over the last few years, journalists in Jammu and Kashmir have been grappling with the basic issues of personal safety and the right to report facts. Reporters and journalists on the ground struggle to report in the midst of a media blackout, a military siege and a pandemic.<p>'+
          'Journalists are often subjected to <b>physical assault</b> at the hands of the Army and the Jammu and Kashmir Police and regularly <b>charged under draconian laws</b>.<p><i>Photo: Kashmir press club protest against violence on journalists in Kashmir. Source: Farooq Khan</i>',
          location: {
            center: [75.60629, 33.31380],
            zoom: 6.07,
            pitch: 0.00,
            bearing: 0.00
          },
          onChapterEnter: [
              {
                  layer: 'polis-kashmir-c',
                  opacity:  0.75
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
          title: 'Anti-CAA protests (26)',
          image: 'assets/caa.png',
          description: 'On 11 December 2019, the Indian Parliament passed the Citizenship Amendment Act (CAA) and the National Register of Citizens (NRC). These laws fast-track granting citizenship to illegal migrants from India’s neighboring countries except if they are Muslim. The passing of the CAA and the NRC sparked peaceful protests across the country that the Police countered with disproportionate violence. In Delhi, peaceful sit-ins gained momentum and widespread media coverage. <p>The anti-CAA protests marked the first unified act of dissent against the ruling Government since it was first elected in 2014 and journalists covering this significant moment in history were subjected to <b>threats</b>, <b>intimidation</b>, <b>FIRs</b> and <b>assault by the Police</b>. <p><i>Photo: Members of the Kerala Union of Working Journalists, protesting against journalists detained while covering the CAA protests. Source: PTI</i>',
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
          title: 'Delhi Pogrom (19)',
          image: 'assets/delhi.jpg',
          description: 'Between 23 and 29 February 2020, during the anti-CAA/NRC protests, violence broke out in North East Delhi and spread across many neighborhoods in the city. The violence lasted for four days and left 53 people dead, of whom 39 were Muslims. <p>Journalists covering the Delhi Pogrom were subjected to varying degrees of violence including <b>threats, intimidation, physical assault and attacks</b>. There were reports of journalists being stopped and asked for their names and religious identities, several others were at the receiving end of <b>mob violence</b>.',
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
          title: 'COVID-19 coverage (46)',
          image: 'assets/covid.png',
          description: 'On 24 March 2020, the Indian Government imposed a strict nationwide lockdown with no warning for preparation. The Police enforced the curfew with unrestrained violence and videos of this brutality emerged online immediately. The Indian Government tried to suppress the reporting of COVID-19 ground realities by forcing journalists to publish only pre-approved information. <p>During the second wave of COVID-19 in India in 2021, journalists who have been painstakingly reporting from the field and questioned the Government’s apathy and negligence have been <b>threatened</b> and accused of spreading rumors about the public health crisis. Journalists covering the pandemic faced <b>FIRs, summons, physical attacks, threats and intimidation</b>.<p><i>Photo: Policeman lathi charging a passerby during the COVID-19 lockdown. Source: Reuters</i>',
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
          title: 'Farmers’ Protest (10)',
          image: 'assets/farmers.jpg',
          description: 'On 20 September 2020, Rajya Sabha passed three Farm Bills to push the agricultural sector in India from a government-run to a private-run sector. Opposition parties and farmers’ unions protested and demanded complete revocation of the Bills. Farmers have organized peaceful marches, sit-in protests and contestations across the country. Government resorted to tactics of repression and violence to counter the protests. <p>Police <b>arrested</b> journalists, labor union representatives and farmers. Police filed <b>FIR’s</b> against and arrested several journalists.<p><i>Photo: Farmers’ Protest. Source: PTI/FILE</i>',
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
          alignment: 'center',
          title: '…and many other reasons (104)',
          image: '',
          description: 'Ever since Prime Minister Narendra Modi’s Bharatiya Janata Party was re-elected in 2019, pressure has increased on the media to toe the Hindu nationalist government’s line. The coordinated hate campaigns waged on social media against journalists who question the Government or uncover the truth behind the Government’s actions elicit calls for murder. The campaigns are particularly violent when the targets are women. <p><b>Criminal prosecutions</b> are often used to gag journalists critical of the authorities, with some prosecutors invoking Section 124a of the Penal Code, under which “sedition” is punishable by life imprisonment. Journalists who’ve reported on crucial and sensitive issues have been <b>attacked, assaulted</b> and in some cases <b>killed</b> for their work. <p>It is important to understand the everyday, isolated instances, where journalists are made the targets of violence. These instances might not be reported, but the threat of violence is ever present.',
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
      },
      {
          id: 'end',
          alignment: 'center',
          title: '',
          image: '',
          description: "<a href='https://www.thepolisproject.com/research/patterns-of-violence-against-journalists-in-india/' target='_blank'>Read further to know more about these events and the journalists that were impacted.</a>",
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
      }
    ]
};
