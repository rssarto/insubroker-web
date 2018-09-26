import * as faIcons from '@fortawesome/free-solid-svg-icons';

export class ProfileIconService {
                                              // 01234567890123456789012345
  static readonly ALPHABET_SEQUENCE: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');

  static readonly ICONS:  faIcons.IconDefinition[] = [
    faIcons.faBroadcastTower,     // A
    faIcons.faBold,               // B
    faIcons.faCopyright,          // C
    faIcons.faDumbbell,           // D
    faIcons.faEuroSign,           // E
    faIcons.faFilm,               // F
    faIcons.faGlobe,              // G
    faIcons.faHeading,            // H
    faIcons.faItalic,             // I
    faIcons.faFighterJet,         // J
    faIcons.faKeyboard,           // K
    faIcons.faLuggageCart,        // L
    faIcons.faMusic,              // M
    faIcons.faNotEqual,           // N
    faIcons.faCircleNotch,        // O
    faIcons.faPodcast,            // P
    faIcons.faQuran,              // Q
    faIcons.faRegistered,         // R
    faIcons.faSearchDollar,       // S
    faIcons.faTextHeight,         // T
    faIcons.faUnderline,          // U
    faIcons.faChevronCircleDown,  // V
    faIcons.faWonSign,            // W
    faIcons.faExpandArrowsAlt,    // X
    faIcons.faYenSign,            // Y
    faIcons.faFileArchive         // Z
  ];

  constructor() {}

  byLetter(letter: string): faIcons.IconDefinition {
    const index = ProfileIconService.ALPHABET_SEQUENCE.findIndex(value => value === letter.toLowerCase());
    let iconDefinition: faIcons.IconDefinition = faIcons.faUserCircle;
    if ( index !== -1 ) {
      iconDefinition = ProfileIconService.ICONS[index];
    }
    return iconDefinition;
  }

  byName(name: string): faIcons.IconDefinition {
    return this.byLetter(name.substring(0, 1));
  }

}
