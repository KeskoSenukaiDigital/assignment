### General

#### Coding style
- Consistent?
- Follows best practices?
- Uses SwiftLint, SwiftFormat?

#### Comments
- Valuable?
- Documentation (DocC)?

#### Quality
- Code warnings?
- Code errors?

#### UI
- Code?
- Storyboards, XIBs?
- UIKit, SwiftUI?

#### Architecture
- Design patterns?
  - MVVM?
  - Coordinator?
  - Dependency injection?
  - Singleton?
- Declarative/Imperative programming?
  - Rx?
  - Combine?
- Object oriented/Functional programming?
- SOLID?
- CLEAN?

#### Libraries
- 3rd party?
  - Pods/Swift package manager?

#### Project
- Organization?
  - Folders?
  - Names?
- Structure?
  - Grouped by logic?

#### Error handling
- Handled in code?
- Reported to end user?

#### Testing
- Asserts in code?
- Unit tests?
- UI tests?

#### Git
- Commits?
- Branches?

### Task

#### Objectives
- Objectives fulfilled?
- Requirements implemented?
- Bonus tasks implemented?

#### Interesting points
- Data
  - Relationships between data:
    - Data from more than one endpoint have to be fetched & combined before display on main view
  - Separate endpoint for item details:
    - Item details have to be fetched from separate endpoint for each individually
  - Data itself:
    - `isbn` is optional
    - `publication_date` value can be parsed to `Date` or left as `String`
    - `snake_case` keys should be parsed to `camelCase`
  - Book view can be opened from main view and list view:
    - Different data is synced in parent views

- UI
  - Each view can be implemented with different components:
    - Main view - `UICollectionView`
    - List view - `UITableView`
    - Book view - `UIScrollView` + `UIStackView`
  - Main view contains vertical & horizontal scrolls:
    - Make sure all components are reused (dequeued)
    - Make sure horizontal scroll positions are retained during vertical scroll
  - Data formatting:
    - Make sure date is formatted according to locale
    - Make sure multiline text is accounted correctly

- CoreData (if implemented)
  - How date is stored (Date or String)?
  - Are relationships implemented?
  - Are insert/update/delete implemented?
