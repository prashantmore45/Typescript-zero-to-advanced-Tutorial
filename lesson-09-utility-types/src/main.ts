// Utilituy Types in TypeScript

// 1. Partial<Type>

interface Assignment {
    studentId: string,
    title: string,
    grade: number,
    verified?: boolean,
};

const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
    return { ...assign, ...propsToUpdate };
};

const assign1: Assignment = {
    studentId: "compsci123",
    title: "Final Project",
    grade: 0,
};

console.log(updateAssignment(assign1, { grade: 95 }));
const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 });
//console.log(assignGraded)


// 2. Required<Type> and Readonly<Type>

const recordAssignment = (assign: Required<Assignment>): Assignment => {
    // Send to database, etc.
    return assign;
}

const assignVerified: Assignment = recordAssignment({
    ...assignGraded,
    verified: true,
});

recordAssignment({ ...assignGraded, verified: true });


// 3. Record<Keys, Type>

const hexColorMap: Record<string, string> = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
};

type Students = "Sara" | "Kelly" | "Tasha";
type LetterGrades = "A" | "B" | "C" | "D" | "F";

const finalGrades: Record<Students, LetterGrades> = {
    Sara: "A",
    Kelly: "B",
    Tasha: "C",
};

interface Grades {
    assign1: number,
    assign2: number,
}

const gradeData: Record<Students, Grades> = {
    Sara: { assign1: 85, assign2: 92 },
    Kelly: { assign1: 76, assign2: 81 },
    Tasha: { assign1: 91, assign2: 89 },
};

// 4. Pick<Type, Keys> and Omit<Type, Keys>

type AssignResult = Pick<Assignment, "studentId" | "grade">;

const score: AssignResult = {
    studentId: "compsci123",
    grade: 95,
};

type AssignPreview = Omit<Assignment, "verified" | "grade">;

const preview: AssignPreview = {
    studentId: "compsci123",
    title: "Final Project",
};

// 5. Exclude<UnionType, ExcludedMembers> and Extract<Type, Union>

type AdjustedGrade = Exclude<LetterGrades, "F">;

type HighGrades = Extract<LetterGrades, "A" | "B">;

// 6. NonNullable<Type>

type AllPossibleGrades = "Dave" | "John" | null | undefined;
type NamesOnly = NonNullable<AllPossibleGrades>;

// 7. ReturnType<Type>

//type newAssign = { title: string, points: number };

const createNewAssign = (title: string, points: number) => {
    return { title, points };
};

type newAssign = ReturnType<typeof createNewAssign>;

const tsAssign: newAssign = createNewAssign("Utility Types", 100);
console.log(tsAssign);

// 8. Parameters<Type> 

type AssignParams = Parameters<typeof createNewAssign>;

const assignArgs: AssignParams = ["Generics", 100];

const tsAssign2: newAssign = createNewAssign(...assignArgs);
console.log(tsAssign2);

// 9. Awaited<Type> - helps us with the ReturnType of a Promise

interface User {
    id: number,
    name: string,
    username: string,
    email: string,
}

const fetchUsers= async (): Promise<User[]> => {
    
    const data = await fetch(
        'https://jsonplaceholder.typicode.com/users'    
    ).then(res => {
        return res.json()
    }).catch(err => {
        if (err instanceof Error) {
            console.log(err.message);
        }
    })
    return data;
}

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>;

fetchUsers().then(users => console.log(users));