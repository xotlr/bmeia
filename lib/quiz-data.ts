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
      },
      {
        id: 51,
        text: "Welches Bundesland hat die größte Fläche?",
        options: ["Steiermark", "Niederösterreich", "Oberösterreich", "Tirol"],
        correctAnswer: 1,
        section: "austrian-politics"
      },
      {
        id: 52,
        text: "Wann wurde die Republik Österreich gegründet?",
        options: ["1918", "1919", "1920", "1921"],
        correctAnswer: 0,
        section: "austrian-politics"
      },
      {
        id: 53,
        text: "Wie viele Bundesländer hat Österreich?",
        options: ["8", "9", "10", "11"],
        correctAnswer: 1,
        section: "austrian-politics"
      },
      {
        id: 54,
        text: "Welche Farben hat die österreichische Flagge?",
        options: ["Rot-Weiß-Rot", "Schwarz-Rot-Gold", "Blau-Weiß-Rot", "Grün-Weiß-Rot"],
        correctAnswer: 0,
        section: "austrian-politics"
      },
      {
        id: 55,
        text: "Wer ist das Staatsoberhaupt von Österreich?",
        options: ["Der Bundeskanzler", "Der Bundespräsident", "Der Nationalratspräsident", "Der Außenminister"],
        correctAnswer: 1,
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
      },
      {
        id: 56,
        text: "Welche EU-Institution hat ihren Sitz in Straßburg?",
        options: ["Europäische Kommission", "Europäisches Parlament", "Europäischer Rat", "Europäische Zentralbank"],
        correctAnswer: 1,
        section: "european-union"
      },
      {
        id: 57,
        text: "Wie heißt der EU-Vertrag, der die Grundlage der Union bildet?",
        options: ["Vertrag von Rom", "Vertrag von Maastricht", "Vertrag von Lissabon", "Vertrag von Nizza"],
        correctAnswer: 2,
        section: "european-union"
      },
      {
        id: 58,
        text: "Welches Land war Gründungsmitglied der EU?",
        options: ["Österreich", "Schweden", "Frankreich", "Spanien"],
        correctAnswer: 2,
        section: "european-union"
      },
      {
        id: 59,
        text: "Wer wählt die Mitglieder des Europäischen Parlaments?",
        options: ["Die nationalen Parlamente", "Die EU-Bürger direkt", "Die Europäische Kommission", "Der Europäische Rat"],
        correctAnswer: 1,
        section: "european-union"
      },
      {
        id: 60,
        text: "Wie oft finden Europawahlen statt?",
        options: ["Alle 3 Jahre", "Alle 4 Jahre", "Alle 5 Jahre", "Alle 6 Jahre"],
        correctAnswer: 2,
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
      },
      {
        id: 61,
        text: "Welche Organisation wurde 1945 in San Francisco gegründet?",
        options: ["NATO", "OSZE", "Vereinte Nationen", "Europarat"],
        correctAnswer: 2,
        section: "international-organizations"
      },
      {
        id: 62,
        text: "Was bedeutet UNESCO?",
        options: ["United Nations Educational, Scientific and Cultural Organization", "United Nations Economic and Social Council", "United Nations Emergency Service Committee", "United Nations Environmental Safety Commission"],
        correctAnswer: 0,
        section: "international-organizations"
      },
      {
        id: 63,
        text: "Wo befindet sich der Hauptsitz der NATO?",
        options: ["Paris", "Brüssel", "Washington", "London"],
        correctAnswer: 1,
        section: "international-organizations"
      },
      {
        id: 64,
        text: "Wann wurde die OSZE gegründet?",
        options: ["1973", "1975", "1977", "1979"],
        correctAnswer: 1,
        section: "international-organizations"
      },
      {
        id: 65,
        text: "Was ist die Hauptaufgabe des Internationalen Gerichtshofs?",
        options: ["Strafverfolgung", "Rechtsprechung zwischen Staaten", "Menschenrechtsschutz", "Wirtschaftsstreitigkeiten"],
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
      },
      {
        id: 66,
        text: "Welcher ist der höchste Berg Österreichs?",
        options: ["Großglockner", "Wildspitze", "Weißkugel", "Großvenediger"],
        correctAnswer: 0,
        section: "geography-neighbors"
      },
      {
        id: 67,
        text: "Durch welches Bundesland fließt die Salzach?",
        options: ["Tirol", "Salzburg", "Oberösterreich", "Kärnten"],
        correctAnswer: 1,
        section: "geography-neighbors"
      },
      {
        id: 68,
        text: "Welches Nachbarland hat die längste Grenze zu Österreich?",
        options: ["Deutschland", "Italien", "Schweiz", "Ungarn"],
        correctAnswer: 0,
        section: "geography-neighbors"
      },
      {
        id: 69,
        text: "Welche Stadt ist die Hauptstadt der Schweiz?",
        options: ["Zürich", "Genf", "Bern", "Basel"],
        correctAnswer: 2,
        section: "geography-neighbors"
      },
      {
        id: 70,
        text: "Welcher See liegt an der Grenze zwischen Österreich und Ungarn?",
        options: ["Bodensee", "Neusiedler See", "Attersee", "Hallstätter See"],
        correctAnswer: 1,
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
      },
      {
        id: 71,
        text: "Welches Land hat 2024 die Olympischen Sommerspiele ausgetragen?",
        options: ["Japan", "Frankreich", "USA", "Australien"],
        correctAnswer: 1,
        section: "current-affairs"
      },
      {
        id: 72,
        text: "Wer ist der aktuelle Generalsekretär der OSZE?",
        options: ["Helga Maria Schmid", "Thomas Greminger", "Lamberto Zannier", "Marc Perrin de Brichambaut"],
        correctAnswer: 0,
        section: "current-affairs"
      },
      {
        id: 73,
        text: "Welche Währung verwendet die Schweiz?",
        options: ["Euro", "Schweizer Franken", "Deutsche Mark", "Österreichische Krone"],
        correctAnswer: 1,
        section: "current-affairs"
      },
      {
        id: 74,
        text: "Wann ist der Nationalfeiertag Österreichs?",
        options: ["1. Mai", "15. August", "26. Oktober", "8. Dezember"],
        correctAnswer: 2,
        section: "current-affairs"
      },
      {
        id: 75,
        text: "Was ist das Motto der EU?",
        options: ["In Vielfalt geeint", "Einheit in Verschiedenheit", "Gemeinsam für Europa", "Frieden und Wohlstand"],
        correctAnswer: 0,
        section: "current-affairs"
      }
    ]
  },
  {
    id: "austrian-law-constitution",
    title: "Österreichisches Recht & Verfassung",
    description: "Verfassungsrecht, Neutralität und rechtliche Grundlagen",
    questions: [
      {
        id: 76,
        text: "Wann wurde die österreichische Bundesverfassung beschlossen?",
        options: ["1918", "1920", "1929", "1945"],
        correctAnswer: 1,
        section: "austrian-law-constitution"
      },
      {
        id: 77,
        text: "Was besagt das österreichische Neutralitätsgesetz?",
        options: ["Keine Teilnahme an Kriegen", "Immerwährende Neutralität", "Keine NATO-Mitgliedschaft", "Alle Antworten sind richtig"],
        correctAnswer: 3,
        section: "austrian-law-constitution"
      },
      {
        id: 78,
        text: "Welches Gericht ist in Österreich die höchste Instanz für Verfassungsfragen?",
        options: ["Oberster Gerichtshof", "Verfassungsgerichtshof", "Verwaltungsgerichtshof", "Europäischer Gerichtshof"],
        correctAnswer: 1,
        section: "austrian-law-constitution"
      },
      {
        id: 79,
        text: "Wie viele Kammern hat das österreichische Parlament?",
        options: ["Eine", "Zwei", "Drei", "Vier"],
        correctAnswer: 1,
        section: "austrian-law-constitution"
      },
      {
        id: 80,
        text: "Wer ernennt die Bundesminister in Österreich?",
        options: ["Der Nationalrat", "Der Bundespräsident", "Das Volk", "Der Bundesrat"],
        correctAnswer: 1,
        section: "austrian-law-constitution"
      },
      {
        id: 81,
        text: "Was ist ein Staatsgrundgesetz?",
        options: ["Ein einfaches Gesetz", "Verfassungsrang", "EU-Recht", "Verwaltungsvorschrift"],
        correctAnswer: 1,
        section: "austrian-law-constitution"
      },
      {
        id: 82,
        text: "Wie lange dauert eine Legislaturperiode des Nationalrats?",
        options: ["4 Jahre", "5 Jahre", "6 Jahre", "7 Jahre"],
        correctAnswer: 1,
        section: "austrian-law-constitution"
      },
      {
        id: 83,
        text: "Was ist das Bundesverfassungsgesetz (B-VG)?",
        options: ["Ein Staatsvertrag", "Die Hauptverfassung Österreichs", "Ein EU-Vertrag", "Ein Völkerrechtsabkommen"],
        correctAnswer: 1,
        section: "austrian-law-constitution"
      },
      {
        id: 84,
        text: "Welche Grundrechte sind in Österreich verfassungsrechtlich geschützt?",
        options: ["Nur wirtschaftliche Rechte", "Nur politische Rechte", "Menschen- und Grundrechte", "Nur soziale Rechte"],
        correctAnswer: 2,
        section: "austrian-law-constitution"
      },
      {
        id: 85,
        text: "Was regelt das Datenschutzgesetz?",
        options: ["Internetzugang", "Schutz personenbezogener Daten", "Telekommunikation", "Medienrecht"],
        correctAnswer: 1,
        section: "austrian-law-constitution"
      }
    ]
  },
  {
    id: "history-culture",
    title: "Geschichte & Kultur",
    description: "Österreichische Geschichte, Kultur und Traditionen",
    questions: [
      {
        id: 86,
        text: "Wann endete die österreichisch-ungarische Monarchie?",
        options: ["1916", "1917", "1918", "1919"],
        correctAnswer: 2,
        section: "history-culture"
      },
      {
        id: 87,
        text: "Wer war der letzte Kaiser von Österreich-Ungarn?",
        options: ["Franz Joseph I.", "Karl I.", "Ferdinand I.", "Franz II."],
        correctAnswer: 1,
        section: "history-culture"
      },
      {
        id: 88,
        text: "Wann wurde Österreich an das Deutsche Reich angeschlossen (Anschluss)?",
        options: ["1936", "1937", "1938", "1939"],
        correctAnswer: 2,
        section: "history-culture"
      },
      {
        id: 89,
        text: "Welcher österreichische Komponist schrieb 'Die Zauberflöte'?",
        options: ["Johann Strauss", "Franz Schubert", "Wolfgang Amadeus Mozart", "Ludwig van Beethoven"],
        correctAnswer: 2,
        section: "history-culture"
      },
      {
        id: 90,
        text: "Was ist das Salzburger Festspiel?",
        options: ["Sportveranstaltung", "Musikfestival", "Oktoberfest", "Kunstausstellung"],
        correctAnswer: 1,
        section: "history-culture"
      },
      {
        id: 91,
        text: "Welcher österreichische Psychoanalytiker begründete die Psychoanalyse?",
        options: ["Carl Jung", "Alfred Adler", "Sigmund Freud", "Viktor Frankl"],
        correctAnswer: 2,
        section: "history-culture"
      },
      {
        id: 92,
        text: "Was ist die Wiener Philharmoniker?",
        options: ["Fußballverein", "Orchester", "Museum", "Universität"],
        correctAnswer: 1,
        section: "history-culture"
      },
      {
        id: 93,
        text: "Wann wurde der Wiener Kongress abgehalten?",
        options: ["1814-1815", "1815-1816", "1816-1817", "1813-1814"],
        correctAnswer: 0,
        section: "history-culture"
      },
      {
        id: 94,
        text: "Welche UNESCO-Welterbestätte gibt es in Wien?",
        options: ["Stephansdom", "Schönbrunn", "Historisches Zentrum", "Alle Antworten sind richtig"],
        correctAnswer: 3,
        section: "history-culture"
      },
      {
        id: 95,
        text: "Was ist der 'Wiener Walzer'?",
        options: ["Ein Gericht", "Ein Tanz", "Ein Gebäude", "Ein Fest"],
        correctAnswer: 1,
        section: "history-culture"
      }
    ]
  },
  {
    id: "economics-development",
    title: "Wirtschaft & Entwicklung",
    description: "Wirtschaftspolitik, internationale Entwicklung und Handel",
    questions: [
      {
        id: 96,
        text: "Was ist das BIP (Bruttoinlandsprodukt)?",
        options: ["Staatsverschuldung", "Gesamtwert aller Güter und Dienstleistungen", "Inflationsrate", "Arbeitslosenquote"],
        correctAnswer: 1,
        section: "economics-development"
      },
      {
        id: 97,
        text: "Welche Organisation koordiniert internationale Entwicklungshilfe?",
        options: ["OECD", "UNDP", "Weltbank", "Alle Antworten sind richtig"],
        correctAnswer: 3,
        section: "economics-development"
      },
      {
        id: 98,
        text: "Was sind die UN-Nachhaltigkeitsziele (SDGs)?",
        options: ["15 Ziele", "17 Ziele", "19 Ziele", "21 Ziele"],
        correctAnswer: 1,
        section: "economics-development"
      },
      {
        id: 99,
        text: "Was ist die Österreichische Entwicklungszusammenarbeit (OEZA)?",
        options: ["Handelsorganisation", "Entwicklungshilfe-Agentur", "Exportförderung", "Tourismusverband"],
        correctAnswer: 1,
        section: "economics-development"
      },
      {
        id: 100,
        text: "Welche Währung verwendet die Schweiz als Österreichs Nachbar?",
        options: ["Euro", "Schweizer Franken", "Dollar", "Pfund"],
        correctAnswer: 1,
        section: "economics-development"
      },
      {
        id: 101,
        text: "Was ist Fairer Handel (Fair Trade)?",
        options: ["Zollfreier Handel", "Ethischer Handel", "Schneller Handel", "Billiger Handel"],
        correctAnswer: 1,
        section: "economics-development"
      },
      {
        id: 102,
        text: "Was bedeutet 'nachhaltige Entwicklung'?",
        options: ["Nur wirtschaftliches Wachstum", "Entwicklung ohne Umweltschutz", "Bedürfnisse erfüllen ohne zukünftige Generationen zu gefährden", "Schnelle Industrialisierung"],
        correctAnswer: 2,
        section: "economics-development"
      },
      {
        id: 103,
        text: "Welche österreichische Bank ist international tätig?",
        options: ["Raiffeisen Bank International", "Erste Group", "BAWAG", "Alle Antworten sind richtig"],
        correctAnswer: 3,
        section: "economics-development"
      },
      {
        id: 104,
        text: "Was ist die Österreichische Kontrollbank (OeKB)?",
        options: ["Zentralbank", "Förderbank für Exporte", "Privatbank", "EU-Institution"],
        correctAnswer: 1,
        section: "economics-development"
      },
      {
        id: 105,
        text: "Was sind Millenniums-Entwicklungsziele?",
        options: ["UN-Ziele bis 2000", "UN-Ziele bis 2015", "EU-Ziele", "OECD-Ziele"],
        correctAnswer: 1,
        section: "economics-development"
      }
    ]
  }
];

// Utility function to shuffle array
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Function to get quiz questions (can be shuffled or limited)
export function getQuizQuestions(sectionId?: string, maxQuestions?: number, shuffle: boolean = false): Question[] {
  let questions: Question[] = [];
  
  if (sectionId) {
    // Get questions from specific section
    const section = quizData.find(s => s.id === sectionId);
    questions = section ? [...section.questions] : [];
  } else {
    // Get all questions from all sections
    questions = quizData.flatMap(section => section.questions);
  }
  
  // Shuffle if requested
  if (shuffle) {
    questions = shuffleArray(questions);
  }
  
  // Limit questions if specified
  if (maxQuestions && maxQuestions > 0) {
    questions = questions.slice(0, maxQuestions);
  }
  
  return questions;
}

export const getScoreMessage = (score: number, total: number): string => {
  const percentage = (score / total) * 100;
  
  if (percentage >= 90) return "Exzellent vorbereitet!";
  if (percentage >= 80) return "Sehr gut, du bist ready!";
  if (percentage >= 70) return "Gut, nochmal die Schwachstellen anschauen";
  if (percentage >= 60) return "Besser nochmal intensiv lernen heute Abend";
  return "Alarm! Lernguide nochmal durchgehen!";
};