"use strict";
// Utilituy Types in TypeScript
;
const updateAssignment = (assign, propsToUpdate) => {
    return { ...assign, ...propsToUpdate };
};
const assign1 = {
    studentId: "compsci123",
    title: "Final Project",
    grade: 0,
};
console.log(updateAssignment(assign1, { grade: 95 }));
const assignGraded = updateAssignment(assign1, { grade: 95 });
//console.log(assignGraded)
// 2. Required<Type> and Readonly<Type>
const recordAssignment = (assign) => {
    // Send to database, etc.
    return assign;
};
const assignVerified = recordAssignment({
    ...assignGraded,
    verified: true,
});
recordAssignment({ ...assignGraded, verified: true });
// 3. Record<Keys, Type>
const hexColorMap = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
};
const finalGrades = {
    Sara: "A",
    Kelly: "B",
    Tasha: "C",
};
const gradeData = {
    Sara: { assign1: 85, assign2: 92 },
    Kelly: { assign1: 76, assign2: 81 },
    Tasha: { assign1: 91, assign2: 89 },
};
const score = {
    studentId: "compsci123",
    grade: 95,
};
const preview = {
    studentId: "compsci123",
    title: "Final Project",
};
// 7. ReturnType<Type>
//type newAssign = { title: string, points: number };
const createNewAssign = (title, points) => {
    return { title, points };
};
const tsAssign = createNewAssign("Utility Types", 100);
console.log(tsAssign);
const assignArgs = ["Generics", 100];
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2);
const fetchUsers = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users').then(res => {
        return res.json();
    }).catch(err => {
        if (err instanceof Error) {
            console.log(err.message);
        }
    });
    return data;
};
fetchUsers().then(users => console.log(users));
