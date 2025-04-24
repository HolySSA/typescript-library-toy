# TypeScript 도서관 관리 시스템

이 프로젝트는 TypeScript로 구현된 간단한 도서관 관리 시스템입니다. SOLID 원칙을 준수하여 설계되었으며, 도서 대여 및 반납 기능을 제공합니다.

## 기능

- 도서 목록 조회
- 도서 추가 (사서 전용)
- 도서 제거 (사서 전용)
- 도서 대여 (회원 전용)
- 도서 반납 (회원 전용)

## 프로젝트 구조

```
src/
├── enums/
│   └── Role.ts              # 사용자 역할 정의
├── interfaces/
│   └── RentManager.ts       # 도서 관리 인터페이스
├── models/
│   ├── Book.ts             # 도서 모델
│   ├── User.ts             # 사용자 추상 클래스
│   ├── Member.ts           # 회원 클래스
│   └── Librarian.ts        # 사서 클래스
├── services/
│   └── Library.ts          # 도서관 서비스 구현
└── index.ts                # 메인 실행 파일
```

## 설치 방법

1. 저장소 클론

```bash
git clone [repository-url]
cd typescript-library-toy
```

2. 의존성 설치

```bash
npm install
```

3. 프로젝트 빌드

```bash
npm run build
```

4. 프로젝트 실행

```bash
npm start
```

## 사용 예시

```typescript
const myLibrary = new Library();
const librarian = new Librarian("르탄이", 30);
const member = new Member("예비개발자", 30);

// 도서 추가
const book = new Book("TypeScript 문법 종합반", "강", new Date());
myLibrary.addBook(librarian, book);

// 도서 대여
myLibrary.rentBook(member, book);

// 도서 반납
myLibrary.returnBook(member, book);
```

## 기술 스택

- TypeScript
- Node.js

## 라이선스

MIT License
