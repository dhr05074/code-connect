type Languages = [
    "Go",
    "TypeScript",
    "JavaScript",
    "Python3",
    "C",
    "C++",
    "C#",
    "Clojure",
    "Dart",
    "Elixir",
    "Java",
    "Kotlin",
    "PHP",
    "R",
    "Ruby",
    "Scala",
    "Swift",
];
type DifficultyTypes = ["hard", "normal", "easy"];
type Steppers = "difficult" | "language" | "api" | "comp";
type SteppersOption = {
    value: string;
    step: "idle" | "loading" | "complete";
};
type StepperListTypes = {
    [key in Steppers]: SteppersOption;
};

type StepType = "idle" | "start" | "level" | "lang" | "api" | "clear" | "end" | "stop";

declare module "uuid";
