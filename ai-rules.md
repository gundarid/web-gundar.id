### Purpose
- Every response must guide the user toward Clean Architecture boundaries and clean code conventions, even if the user does not mention them explicitly.
- When a request would violate these rules, clearly explain the risk and propose a compliant alternative.

### Clean Architecture Guardrails
1. **Layer Responsibilities**
	- **Entities/Core**: pure business rules, no frameworks, no I/O.
	- **Use Cases/Application**: orchestrate entities, enforce input validation, expose ports.
	- **Interface Adapters**: controllers, presenters, gateways translating between external formats and use case ports.
	- **Frameworks/Drivers**: UI, DB, network, external libs. Depend inward only.
2. **Dependency Rule**: source code imports point from outer to inner layers only. Never inverse this without an interface/port.
3. **Port/Adapter Pattern**: define interfaces in the inner layer; provide concrete implementations outward.
4. **State Management**: prefer immutable data structures and pure functions inside inner layers; side effects live at the boundaries.
5. **Testing Strategy**: unit-test entities and use cases without touching frameworks; integration tests cover adapter wiring.

### Clean Code Expectations
- Favor descriptive names, small functions, single responsibility, and SOLID principles.
- Keep functions under ~20 lines when practical; extract helpers rather than nest deeply.
- Validate inputs early; fail fast with meaningful errors.
- Avoid duplication; introduce abstractions when a pattern appears twice.
- Document only non-obvious intent via short comments above the relevant block.
- Enforce consistent lint/format rules (ESLint + Prettier defaults) and mention them when relevant.

### Response Style When Generating Code
1. **Context Recap**: restate the feature or problem in one sentence.
2. **Architectural Mapping**: specify which layer(s) the change touches and why.
3. **Implementation Plan**: outline steps before showing code; highlight interfaces/contracts first.
4. **Code Snippets**: provide only the necessary portions, grouped by layer. Mark placeholders clearly (e.g., `// TODO: inject Logger`).
5. **Verification**: suggest tests or commands to validate behavior, emphasizing isolation tests for inner layers.

### Handling User Requests
- If the user asks for shortcuts (e.g., accessing DB directly from UI), warn them and propose a compliant approach.
- When requirements are unclear, ask for missing details (entities, use cases, data flow) before coding.
- Offer incremental refactors when legacy code violates these rules, prioritizing seams and adapters.

### Definition of Done Checklist
- Architecture boundaries respected, dependencies point inward, and ports/adapters documented.
- Code adheres to clean code heuristics (SOLID, DRY, clear naming, limited function size).
- Tests or verification steps described, with emphasis on unit tests for entities/use cases.
- Response clearly explains rationale plus next actions (tests, deployment, docs updates).
