
import a3 from "../audio/Piano.pp.A3.mp3";
import a4 from "../audio/Piano.pp.A4.mp3";
import a5 from "../audio/Piano.pp.A5.mp3";
import a6 from "../audio/Piano.pp.A6.mp3";

import ab3 from "../audio/Piano.pp.Ab3.mp3";
import ab4 from "../audio/airport/piano-Ab4.mp3";
import ab5 from "../audio/airport/piano-Ab5.mp3";
import ab6 from "../audio/airport/piano-Ab6.mp3";

import b3 from "../audio/Piano.pp.B3.mp3";
import b4 from "../audio/Piano.pp.B4.mp3";
import b5 from "../audio/Piano.pp.B5.mp3";
import b6 from "../audio/Piano.pp.B6.mp3";

import bb3 from "../audio/Piano.pp.Bb3.mp3";
import bb4 from "../audio/Piano.pp.Bb4.mp3";
import bb5 from "../audio/Piano.pp.Bb5.mp3";
import bb6 from "../audio/Piano.pp.Bb6.mp3";

import c3 from "../audio/Piano.pp.C3.mp3";
import c4 from "../audio/airport/piano-C4.mp3";
import c5 from "../audio/airport/piano-C5.mp3";
import c6 from "../audio/airport/piano-C6.mp3";

import d3 from "../audio/Piano.pp.D3.mp3";
import d4 from "../audio/Piano.pp.D4.mp3";
import d5 from "../audio/Piano.pp.D5.mp3";
import d6 from "../audio/Piano.pp.D6.mp3";

import db3 from "../audio/Piano.pp.Db3.mp3";
import db4 from "../audio/airport/piano-Db4.mp3";
import db5 from "../audio/airport/piano-Db5.mp3";
import db6 from "../audio/airport/piano-Db6.mp3";


import e3 from "../audio/Piano.pp.E3.mp3";
import e4 from "../audio/Piano.pp.E4.mp3";
import e5 from "../audio/Piano.pp.E5.mp3";
import e6 from "../audio/Piano.pp.E6.mp3";

import eb3 from "../audio/Piano.pp.Eb3.mp3";
import eb4 from "../audio/airport/piano-Eb4.mp3";
import eb5 from "../audio/airport/piano-Eb5.mp3";
import eb6 from "../audio/airport/piano-Eb6.mp3";

import f3 from "../audio/Piano.pp.F3.mp3";
import f4 from "../audio/airport/piano-F4.mp3";
import f5 from "../audio/airport/piano-F5.mp3";
import f6 from "../audio/airport/piano-F6.mp3";

import g3 from "../audio/Piano.pp.G3.mp3";
import g4 from "../audio/Piano.pp.G4.mp3";
import g5 from "../audio/Piano.pp.G5.mp3";
import g6 from "../audio/Piano.pp.G6.mp3";

import gb3 from "../audio/Piano.pp.Gb3.mp3";
import gb4 from "../audio/Piano.pp.Gb4.mp3";
import gb5 from "../audio/Piano.pp.Gb5.mp3";
import gb6 from "../audio/Piano.pp.Gb6.mp3";

const notes = [
  {note: 'A', octave: 3, file: a3},
  {note: 'A', octave: 4, file: a4},
  {note: 'A', octave: 5, file: a5},
  {note: 'A', octave: 6, file: a6},

  {note: 'Ab', octave: 3, file: ab3},
  {note: 'Ab', octave: 4, file: ab4},
  {note: 'Ab', octave: 5, file: ab5},
  {note: 'Ab', octave: 6, file: ab6},

  {note: 'B', octave: 3, file: b3},
  {note: 'B', octave: 4, file: b4},
  {note: 'B', octave: 5, file: b5},
  {note: 'B', octave: 6, file: b6},

  {note: 'Bb', octave: 3, file: bb3},
  {note: 'Bb', octave: 4, file: bb4},
  {note: 'Bb', octave: 5, file: bb5},
  {note: 'Bb', octave: 6, file: bb6},

  {note: 'C', octave: 3, file: c3},
  {note: 'C', octave: 4, file: c4},
  {note: 'C', octave: 5, file: c5},
  {note: 'C', octave: 6, file: c6},


  {note: 'D', octave: 3, file: d3},
  {note: 'D', octave: 4, file: d4},
  {note: 'D', octave: 5, file: d5},
  {note: 'D', octave: 6, file: d6},

  {note: 'Db', octave: 3, file: db3},
  {note: 'Db', octave: 4, file: db4},
  {note: 'Db', octave: 5, file: db5},
  {note: 'Db', octave: 6, file: db6},

  {note: 'E', octave: 3, file: e3},
  {note: 'E', octave: 4, file: e4},
  {note: 'E', octave: 5, file: e5},
  {note: 'E', octave: 6, file: e6},

  {note: 'Eb', octave: 3, file: eb3},
  {note: 'Eb', octave: 4, file: eb4},
  {note: 'Eb', octave: 5, file: eb5},
  {note: 'Eb', octave: 6, file: eb6},

  {note: 'F', octave: 3, file: f3},
  {note: 'F', octave: 4, file: f4},
  {note: 'F', octave: 5, file: f5},
  {note: 'F', octave: 6, file: f6},

  {note: 'G', octave: 3, file: g3},
  {note: 'G', octave: 4, file: g4},
  {note: 'G', octave: 5, file: g5},
  {note: 'G', octave: 6, file: g6},

  {note: 'Gb', octave: 3, file: gb3},
  {note: 'Gb', octave: 4, file: gb4},
  {note: 'Gb', octave: 5, file: gb5},
  {note: 'Gb', octave: 6, file: gb6},
];


export const airport = [
  {note: 'Ab', octave: 4, file: ab4},
  {note: 'Ab', octave: 5, file: ab5},
  {note: 'Ab', octave: 6, file: ab6},
  {note: 'C', octave: 4, file: c4},
  {note: 'C', octave: 5, file: c5},
  {note: 'C', octave: 6, file: c6},
  {note: 'Db', octave: 4, file: db4},
  {note: 'Db', octave: 5, file: db5},
  {note: 'Db', octave: 6, file: db6},
  {note: 'Eb', octave: 4, file: eb4},
  {note: 'Eb', octave: 5, file: eb5},
  {note: 'Eb', octave: 6, file: eb6},
  {note: 'F', octave: 4, file: f4},
  {note: 'F', octave: 5, file: f5},
  {note: 'F', octave: 6, file: f6}
];

export const airport_progressions = [["Ab", "C", "Db", "Eb", "F"], ["Ab", "Eb", "C", "Eb"], ["Ab", "C", "Db", "Ab", "C", "F", "Ab"]];

export const rhytmic_patterns = [];

export default notes;