# Innhold og funksjonalitet
### Task/Todo:
Når man åpner appen kommer man automatisk til en task-oversikt side. Her kan man legge til ulike kategorier, som forskjellige fag, handlelister, leselister og så videre.

Dersom man går inn på en spesifikt **task**, kommer de ulike oppgavene(todos) man har knyttet opp til tasken opp, sammen med en progress bar som viser hvor stor andel av oppgavene dine som er fullført. Dette er ment som motivasjonsbiten av appen, siden det så klart viser visuelt din framgang i tasken.

### Activity:
Foruten å velge vanlige tasks, kan man også velge **activity**. Dette er direkte knyttet opp mot skrittelleren. Målet kan derfor f.eks være 40.000 skritt innen neste mandag. Dette er et sted det ville vært naturlig å utvide, både med flere typer mål og flere tidskriterier, som for eksempel, gjentagende(daglig, ukentlig, osv), knyttet til ukedag eller lignende.
 
(Bilde av appen)
 
Under planleggingsfasene, ble vi enige om at dette var et produkt som vi ikke hadde funnet på markedet, men som vi egentlig har leitet etter. Vi håper appen skal gjøre det letter å nå dine mål, og at du dermed ender opp med å jobbe mer effektivt.

### Utover standard React Native UI-problematikk:
Skritteller (eget mål i appen)

### Teknologi
**Expo, React Native.**
 
Endringer man har gjort i appen lagres lokalt ved hjelp av **AsyncStorage**.

### Valg og løsninger (kompontenter, rammeverk, tredjepartsbibloteker)
Etter krav fra oppgaven har vi tatt i bruk:
- React Native
- Expo
- Jest

Vi har også funnet flere tredjepartsbibliotek vi valgte å ta i bruk:
**UI:**
- NativeBase:
NativeBase er et veldig enkelt kryss-plattform UI-bibliotek som gjør det raskt å bygge gode GUI-er som ser bra ut og er enkle å forstå. De har også veldig god og oversiktlig dokumentasjon, og kan finnes i Expo-appen. Det fungerer også med Jest. Derfor valgte vi NativeBase.

- VictoryNative:
Vi ønsket å fremstille progress/fremgang grafisk, derfor tok vi i bruk dette biblioteket. Vi synes grafikken ser bra ut, er enkel å bruke og den fungerer med Jest og Expo.

**Navigasjon:**
- React-Navigation:
Vi ønsket å gjøre navigasjonen mellom komponenter enkel og rask, så vi valgte React-Navigation av flere grunner: det skrives i javascript og er dermed enkelt for oss å forstå. Det negative er at det ikke alltid er like intuitivt, men utviklerne sier selv at de jobber for å gjøre “enkle ting enkelt, og vanskelige ting mulig”.

(Bildet til strukturen) 
### Plattformuavhengighet
I oppgaven står det “Applikasjonen skal fungere både på ios og android.”. For oss har dette vært et problem -> for å teste på IOS må man ha Mac, OSX eller en iPhone. Dette er det ingen på gruppa som har, og vi har ikke funnet noen mulige måter å teste dette på uten å skaffe en iPhone/Mac. Vi har sett på muligheten for simulator, men dette er bare mulig hvis man har OSX - som man bare har på Mac. Dermed har vi ikke fått testet appen på IOS, og vet heller ikke om den fungerer på IOS. Når det er sagt, skal alle bibliotekene vi har brukt være plattform uavhengige, så det skal sannsynligvis fungere på iPhone.
På tross av dette har vi prøvd å skrive koden slik at den skal fungere på både android og ios.
For de som skal teste appen og bruker iPhone, kan det anbefales å installere android-studio og en android-emulator gjennom studio. Dette har vi gjort selv og det fungerer veldig bra for utvikling. Her er en god [lenke](https://developer.android.com/studio/run/emulator)

Forøvrig er appen testet og fungerer på Samsung S6 Edge, Samsung S8, Huawei Honor, Nexus 5X(emulator) og Pixel 2(emulator).

Utviklingsmetode
Vi startet prosjektet med retrospect fra prosjekt 2, og alle på gruppa var åpne for å gjøre en del endringer. Grunnen til dette var både egne erfaringer, samt tilbakemeldinger fra andre peer-review. Issuene ble utarbeidet I fellesskap, for å få en felles forståelse for de oppgavene som skulle gjøres.
En annen ting vi ønsket å endre var hyppigere møter. Dette startet ganske bra, men ble etter hvert ganske langt i mellom. Tenkte også vi skulle få til en litt jevnere arbeidsfordelingen denne gangen, men det ble etter hvert litt skeivt fordelt da programmeringskunnskaper varierte stort i gruppen.
 
Vi har benyttet github til å holde styr på progresjonen av prosjektet ved hjelp av «Git projects». Develop branch oppdaterte vi hver gang vi la til en ny feature. I tillegg hadde vi feature branches, som var knyttet til issues. Alle commits var knyttet opp til et issue.
 
### Tutorials
I alle våre “tutorials” tar vi utgangspunkt i at du allerede har node, npm og React Native CLI installert. Og at du har opprettet et React-Native/Expo prosjekt. Hvis ikke, ta en titt på disse lenkene:
[1](https://facebook.github.io/react-native/docs/getting-started.html)
[2](https://www.npmjs.com/))
[3](https://nodejs.org/en/)

**NativeBase:**

[Documentation](https://docs.nativebase.io/docs/GetStarted.html)
NativeBase er et bibliotek for UI-komponenter i React Native. Det er gratis, open-source og fungerer på både IOS og Android(og Web). NativeBase gjør det veldig lett å style komponentene sine, og gjør at de lett kan se bra ut.

1. Sett opp NativeBase med npm/yarn:
2. Naviger til prosjektetmappen din i terminalen. 
3. Skriv deretter: 'npm install native-base --save' for å installere native-base
4. 'react-native link' for å installer peer-dependencies.

Oppsettet for React-Native er nå ferdig, for å sette opp med expo må du i tillegg:
1. yarn add native-base --save
2. npm install @expo/vector-icons --save
3. NativeBase bruker en font som må loades,, legg dette til i komponente din:
'''
async componentWillMount() {
  await Expo.Font.loadAsync({
    \'Roboto\': require(\'native-base/Fonts/Roboto.ttf\'),
    \'Roboto_medium\': require(\'native-base/Fonts/Roboto_medium.ttf\'),
  });
}
'''

**Hvordan bruke?**
Gå til components-delen av NativeBase sin dokumentasjon(som er linket over). Finn komponenten du vil ha, her ligger det klare kode-eksempler som man kan bruke rett inn i f.eks render() funksjonen.
For å importer komponenten du vil bruke, for eksempel 'Button' fra NativeBase, skriv:
'import { Button } from \'native-base\';'

Inkluder komponenten ved hjelp av kode-eksemplet du finner i dokumentasjonen.

**VictoryNative:**

https://formidable.com/open-source/victory/docs/native/
VictoryNative gjør det enkelt å lage grafiske fremstillinger som kan tilpasses mye.

**Installasjon:**
Naviger til prosjektet ditt i terminalen og skriv:
1. 'npm install --save-dev victory-native react-native-svg'
2. 'react-native link react-native-svg'
3. Importer komponentene du ønsker(feks): 'import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";'

**Bruk:**
1. Lag en liste, i renders return: lag f.eks. en 
"<VictoryChart>
   <VictoryBar data={navn på lista}>
</VictoryChart>"
I dokumentasjonen finner man veldig mye om hvordan man bruker og tilpasser komponentene.

### Testing
- Systematisk enhetstesting. (Jest). Rammeverk som implementerer test-støtte i JS. Gjennom prosjektet har vi kontinuerlig benyttet våre egne telefoner, samt Android Studio Emulator for å teste funksjonaliteten. 

- Manuelle tester; simulerte bruk av appen. Sjekket om det var forventet oppførsel. 
**OBS!** For å kjøre testene er du nødt til å:
1. 'npm i jest-cli –global'  ; innstallerer lokalt
2. cd … ; Åpne terminal i rotmappe
3. 'jest (jest –coverage)' ; starter testene
 
 
Testene burde være deterministiske. Altså at de gir det samme svaret hver gang de kjøres uten at komponenten har endret seg.
 
Testene forsikrer oss om at all ønsket funksjonalitet virker, samt at grensesnittet renderer(konverteres) på korrekt måte.

### Kilder
- [Getting started with react native](https://www.safaribooksonline.com/library/view/getting-started-with/9781785885181/ch01.html)
- [Ract-native](https://facebook.github.io/react-native/)
- [Expo](https://expo.io/)
- [AsyncStorage](https://facebook.github.io/react-native/docs/asyncstorage.html)
- [React Navigation](https://reactnavigation.org/docs/en/getting-started.html) 
- [Snapshot testing 1](https://jestjs.io/docs/en/snapshot-testing)
- [Snapshot testing 2](https://scotch.io/tutorials/writing-snapshot-tests-for-react-components-with-jest)
 
