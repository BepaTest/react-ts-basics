import CourseGoal from "./CourseGoal"
import { type CourseGoal as CGoal} from "../App.tsx"
import InfoBox from "./InfoBox.tsx"
import { type ReactNode } from "react";

type CourseGoalListProps = {
  goals: CGoal[];
  onDeleteGoal: (id:number) => void;
}

export default function CourseGoalList ({
  goals,
  onDeleteGoal
}:CourseGoalListProps) {
  if (goals.length === 0) {
    return <InfoBox mode='hint'> You have no corse goals yet. Add some :)</InfoBox>
  }

  let warningBox: ReactNode

  if (goals.length >=4) {
    warningBox = (
      <InfoBox mode="warning" severity="high">
        Yo're collectiong a lot of goals. Don't put too much on your plate!
      </InfoBox>
    )
  }

  return(
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal title={goal.title} onDelete={onDeleteGoal} id={goal.id}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  )
}