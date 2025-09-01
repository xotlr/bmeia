export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  section: string;
}

export interface QuizSection {
  id: string;
  title: string;
  description: string;
  questions: Question[];
}

export const quizData: QuizSection[] = [
  {
    id: "austrian-politics",
    title: "Österreichische Politik",
    description: "10 Fragen zur österreichischen Politik und Verwaltung",
    questions: [
      {
        id: 1,
        text: "Wer ist die aktuelle Bundesministerin für europäische und internationale Angelegenheiten?",
        options: ["Werner Kogler", "Alexander Schallenberg", "Beate Meinl-Reisinger", "Karoline Edtstadler"],
        correctAnswer: 2,
        section: "austrian-politics"
      },
      {
        id: 2,
        text: "Seit wann ist Österreich Mitglied der Vereinten Nationen?",
        options: ["1945", "1955", "1960", "1995"],
        correctAnswer: 1,
        section: "austrian-politics"
      },
      {
        id: 3,
        text: "Welches Bundesland hat die KLEINSTE Einwohnerzahl?",
        options: ["Vorarlberg", "Burgenland", "Kärnten", "Salzburg"],
        correctAnswer: 1,
        section: "austrian-politics"
      },
      {
        id: 4,
        text: "Wann wurde die österreichische Neutralität beschlossen?",
        options: ["15. Mai 1955", "26. Oktober 1955", "1. Januar 1956", "27. April 1945"],
        correctAnswer: 1,
        section: "austrian-politics"
      },
      {
        id: 5,
        text: "Wie viele Abgeordnete hat der österreichische Nationalrat?",
        options: ["165", "173", "183", "193"],
        correctAnswer: 2,
        section: "austrian-politics"
      },
      {
        id: 6,
        text: "Welche Parteien bilden die aktuelle Bundesregierung (seit März 2025)?",
        options: ["ÖVP und SPÖ", "ÖVP und FPÖ", "ÖVP und Grüne", "ÖVP, SPÖ und NEOS"],
        correctAnswer: 3,
        section: "austrian-politics"
      },
      {
        id: 7,
        text: "Wer ist der aktuelle Bundeskanzler Österreichs?",
        options: ["Karl Nehammer", "Alexander Schallenberg", "Christian Stocker", "Andreas Babler"],
        correctAnswer: 2,
        section: "austrian-politics"
      },
      {
        id: 8,
        text: "Wer ist der aktuelle Vizekanzler?",
        options: ["Werner Kogler", "Andreas Babler", "Beate Meinl-Reisinger", "Magnus Brunner"],
        correctAnswer: 1,
        section: "austrian-politics"
      },
      {
        id: 9,
        text: "Ab welchem Alter darf man in Österreich wählen?",
        options: ["15 Jahre", "16 Jahre", "18 Jahre", "21 Jahre"],
        correctAnswer: 1,
        section: "austrian-politics"
      },
      {
        id: 10,
        text: "Wie heißt die Hauptstadt von Niederösterreich?",
        options: ["Wiener Neustadt", "Krems", "St. Pölten", "Baden"],
        correctAnswer: 2,
        section: "austrian-politics"
      }
    ]
  },
  {
    id: "european-union",
    title: "Europäische Union",
    description: "10 Fragen zur Europäischen Union und ihre Institutionen",
    questions: [
      {
        id: 11,
        text: "Wie viele Mitgliedstaaten hat die EU aktuell?",
        options: ["25", "26", "27", "28"],
        correctAnswer: 2,
        section: "european-union"
      },
      {
        id: 12,
        text: "Wer ist die aktuelle Präsidentin der Europäischen Kommission?",
        options: ["Christine Lagarde", "Ursula von der Leyen", "Roberta Metsola", "Giorgia Meloni"],
        correctAnswer: 1,
        section: "european-union"
      },
      {
        id: 13,
        text: "Wann trat Österreich der EU bei?",
        options: ["1. Januar 1993", "1. Januar 1995", "1. Januar 1999", "1. Mai 2004"],
        correctAnswer: 1,
        section: "european-union"
      },
      {
        id: 14,
        text: "Wie viele österreichische Abgeordnete sitzen im EU-Parlament?",
        options: ["17", "18", "19", "20"],
        correctAnswer: 3,
        section: "european-union"
      },
      {
        id: 15,
        text: "Welches Land hat 2020 die EU verlassen?",
        options: ["Norwegen", "Schweiz", "Vereinigtes Königreich", "Island"],
        correctAnswer: 2,
        section: "european-union"
      },
      {
        id: 16,
        text: "Wo hat der Europäische Gerichtshof seinen Sitz?",
        options: ["Brüssel", "Straßburg", "Luxemburg", "Frankfurt"],
        correctAnswer: 2,
        section: "european-union"
      },
      {
        id: 17,
        text: "Welcher österreichische Politiker ist EU-Kommissar (seit Dezember 2024)?",
        options: ["Johannes Hahn", "Magnus Brunner", "Othmar Karas", "Alexander Schallenberg"],
        correctAnswer: 1,
        section: "european-union"
      },
      {
        id: 18,
        text: "Wie oft wechselt die EU-Ratspräsidentschaft?",
        options: ["Alle 3 Monate", "Alle 6 Monate", "Jährlich", "Alle 2 Jahre"],
        correctAnswer: 1,
        section: "european-union"
      },
      {
        id: 19,
        text: "Welches dieser Länder ist KEIN EU-Mitglied?",
        options: ["Bulgarien", "Rumänien", "Kroatien", "Serbien"],
        correctAnswer: 3,
        section: "european-union"
      },
      {
        id: 20,
        text: "Wann wurde der Euro als Bargeld in Österreich eingeführt?",
        options: ["1999", "2000", "2001", "2002"],
        correctAnswer: 3,
        section: "european-union"
      }
    ]
  },
  {
    id: "international-organizations",
    title: "Internationale Organisationen",
    description: "10 Fragen zu internationalen Organisationen und deren Sitz in Wien",
    questions: [
      {
        id: 21,
        text: "Welche Organisation hat KEINEN Sitz in Wien?",
        options: ["IAEA", "WHO", "OSZE", "OPEC"],
        correctAnswer: 1,
        section: "international-organizations"
      },
      {
        id: 22,
        text: "Wer ist der aktuelle UN-Generalsekretär?",
        options: ["Ban Ki-moon", "António Guterres", "Kofi Annan", "Boutros Boutros-Ghali"],
        correctAnswer: 1,
        section: "international-organizations"
      },
      {
        id: 23,
        text: "Was bedeutet OSZE?",
        options: ["Organisation für Sicherheit und Zusammenarbeit in Europa", "Organisation für Soziale Zusammenarbeit in Europa", "Österreichische Sicherheits- und Zolleinheit", "Organisation für Solidarität und Zivilschutz in Europa"],
        correctAnswer: 0,
        section: "international-organizations"
      },
      {
        id: 24,
        text: "Wie viele permanente Mitglieder hat der UN-Sicherheitsrat?",
        options: ["3", "5", "7", "10"],
        correctAnswer: 1,
        section: "international-organizations"
      },
      {
        id: 25,
        text: "Was ist die IAEO/IAEA?",
        options: ["Internationale Arbeitsorganisation", "Internationale Atomenergie-Organisation", "Internationale Agentur für Entwicklung und Organisation", "Internationale Allianz für Energieoptimierung"],
        correctAnswer: 1,
        section: "international-organizations"
      },
      {
        id: 26,
        text: "In welchem Wiener Bezirk befindet sich die UNO-City?",
        options: ["1. Bezirk (Innere Stadt)", "9. Bezirk (Alsergrund)", "22. Bezirk (Donaustadt)", "23. Bezirk (Liesing)"],
        correctAnswer: 2,
        section: "international-organizations"
      },
      {
        id: 27,
        text: "Welche Stadt beherbergt neben Wien, New York und Genf ebenfalls einen UN-Hauptsitz?",
        options: ["Paris", "London", "Nairobi", "Tokyo"],
        correctAnswer: 2,
        section: "international-organizations"
      },
      {
        id: 28,
        text: "Wann wurde die OPEC gegründet?",
        options: ["1950", "1960", "1970", "1980"],
        correctAnswer: 1,
        section: "international-organizations"
      },
      {
        id: 29,
        text: "Wie viele Mitgliedstaaten hat die OSZE?",
        options: ["27", "47", "57", "67"],
        correctAnswer: 2,
        section: "international-organizations"
      },
      {
        id: 30,
        text: "Was ist UNIDO?",
        options: ["UN-Entwicklungsprogramm", "UN-Organisation für industrielle Entwicklung", "UN-Kinderhilfswerk", "UN-Flüchtlingshilfswerk"],
        correctAnswer: 1,
        section: "international-organizations"
      }
    ]
  },
  {
    id: "geography-neighbors",
    title: "Geographie & Nachbarländer",
    description: "10 Fragen zur Geographie Österreichs und seiner Nachbarländer",
    questions: [
      {
        id: 31,
        text: "Welches Land ist KEIN Nachbarland Österreichs?",
        options: ["Slowakei", "Polen", "Slowenien", "Liechtenstein"],
        correctAnswer: 1,
        section: "geography-neighbors"
      },
      {
        id: 32,
        text: "Wie viele Nachbarländer hat Österreich?",
        options: ["6", "7", "8", "9"],
        correctAnswer: 2,
        section: "geography-neighbors"
      },
      {
        id: 33,
        text: "Welches ist Österreichs längstes Grenzland?",
        options: ["Deutschland", "Italien", "Ungarn", "Tschechien"],
        correctAnswer: 0,
        section: "geography-neighbors"
      },
      {
        id: 34,
        text: "Welche Stadt ist die Hauptstadt der Slowakei?",
        options: ["Ljubljana", "Bratislava", "Zagreb", "Budapest"],
        correctAnswer: 1,
        section: "geography-neighbors"
      },
      {
        id: 35,
        text: "Welches Nachbarland ist KEIN EU-Mitglied?",
        options: ["Schweiz", "Slowenien", "Ungarn", "Tschechien"],
        correctAnswer: 0,
        section: "geography-neighbors"
      },
      {
        id: 36,
        text: "Welcher Fluss bildet teilweise die Grenze zwischen Österreich und Deutschland?",
        options: ["Donau", "Inn", "Rhein", "Elbe"],
        correctAnswer: 1,
        section: "geography-neighbors"
      },
      {
        id: 37,
        text: "Welches Bundesland grenzt an die meisten Nachbarländer?",
        options: ["Tirol", "Kärnten", "Steiermark", "Oberösterreich"],
        correctAnswer: 0,
        section: "geography-neighbors"
      },
      {
        id: 38,
        text: "Was ist die Hauptstadt von Slowenien?",
        options: ["Zagreb", "Ljubljana", "Maribor", "Sarajevo"],
        correctAnswer: 1,
        section: "geography-neighbors"
      },
      {
        id: 39,
        text: "Welches Nachbarland hat die kleinste Fläche?",
        options: ["Slowakei", "Schweiz", "Slowenien", "Liechtenstein"],
        correctAnswer: 3,
        section: "geography-neighbors"
      },
      {
        id: 40,
        text: "An welches Meer grenzt KEINES von Österreichs Nachbarländern?",
        options: ["Mittelmeer", "Adria", "Ostsee", "Nordsee"],
        correctAnswer: 2,
        section: "geography-neighbors"
      }
    ]
  },
  {
    id: "current-affairs",
    title: "Aktuelle Themen & Außenpolitik",
    description: "10 Fragen zu aktuellen Themen und außenpolitischen Entwicklungen",
    questions: [
      {
        id: 41,
        text: "Welches Klimaziel hat sich Österreich gesetzt?",
        options: ["Klimaneutralität bis 2030", "Klimaneutralität bis 2040", "Klimaneutralität bis 2050", "Klimaneutralität bis 2060"],
        correctAnswer: 1,
        section: "current-affairs"
      },
      {
        id: 42,
        text: "Wer gewann die US-Präsidentschaftswahl 2024?",
        options: ["Joe Biden", "Kamala Harris", "Donald Trump", "Ron DeSantis"],
        correctAnswer: 2,
        section: "current-affairs"
      },
      {
        id: 43,
        text: "Seit wann herrscht der aktuelle Ukraine-Konflikt?",
        options: ["Februar 2021", "Februar 2022", "März 2023", "Januar 2024"],
        correctAnswer: 1,
        section: "current-affairs"
      },
      {
        id: 44,
        text: "Welches Land hält aktuell (2. Halbjahr 2025) die EU-Ratspräsidentschaft?",
        options: ["Polen", "Finnland", "Dänemark", "Zypern"],
        correctAnswer: 2,
        section: "current-affairs"
      },
      {
        id: 45,
        text: "Was ist das Pariser Klimaabkommen?",
        options: ["Begrenzung der Erderwärmung auf 1,5°C", "Verbot von Atomkraft", "Einführung einer CO2-Steuer", "Ausstieg aus fossilen Brennstoffen bis 2030"],
        correctAnswer: 0,
        section: "current-affairs"
      },
      {
        id: 46,
        text: "Welcher neue NATO-Generalsekretär trat im Oktober 2024 sein Amt an?",
        options: ["Jens Stoltenberg", "Mark Rutte", "Boris Johnson", "Emmanuel Macron"],
        correctAnswer: 1,
        section: "current-affairs"
      },
      {
        id: 47,
        text: "Welches Westbalkan-Land erhielt zuletzt EU-Kandidatenstatus?",
        options: ["Serbien", "Kosovo", "Bosnien-Herzegowina", "Montenegro"],
        correctAnswer: 2,
        section: "current-affairs"
      },
      {
        id: 48,
        text: "Was bedeutet SDG?",
        options: ["Special Development Goals", "Sustainable Development Goals", "Social Democratic Goals", "Strategic Defense Goals"],
        correctAnswer: 1,
        section: "current-affairs"
      },
      {
        id: 49,
        text: "Wann wurde Kroatien EU-Mitglied?",
        options: ["2004", "2007", "2013", "2015"],
        correctAnswer: 2,
        section: "current-affairs"
      },
      {
        id: 50,
        text: "Welches Abkommen regelt das diplomatische Völkerrecht?",
        options: ["Genfer Konvention", "Wiener Übereinkommen", "Haager Abkommen", "New Yorker Vertrag"],
        correctAnswer: 1,
        section: "current-affairs"
      }
    ]
  }
];

export const getScoreMessage = (score: number, total: number): string => {
  const percentage = (score / total) * 100;
  
  if (percentage >= 90) return "Exzellent vorbereitet!";
  if (percentage >= 80) return "Sehr gut, du bist ready!";
  if (percentage >= 70) return "Gut, nochmal die Schwachstellen anschauen";
  if (percentage >= 60) return "Besser nochmal intensiv lernen heute Abend";
  return "Alarm! Lernguide nochmal durchgehen!";
};