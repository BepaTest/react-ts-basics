import { type FC, type PropsWithChildren, type ReactNode } from "react";

// interface CourseGoalProps {
//   title:string; 
//   children: ReactNode
// }

type CourseGoalProps = PropsWithChildren<{
  id:number
  title:string;
  onDelete: (id:number) => void;
}>

const CourseGoal:FC<CourseGoalProps> = ({title, children, onDelete, id}) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={()=>onDelete(id)}>Delete</button>
    </article>
  )
}

export default CourseGoal

// export default function CourseGoal ({title, children}: CourseGoalProps) {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         {children}
//       </div>
//       <button>Delete</button>
//     </article>
//   )
// }