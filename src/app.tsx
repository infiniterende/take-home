import styles from "./app.module.css";
import { CandidateList } from "./components/candidateList";
import { Container } from "./components/container";
import { Navbar } from "./components/navbar";
import { Plot } from "./components/plot";
import { useCandidates } from "./hooks/use-candidates";

export const MAX_SELECTIONS = 5;

export default function App() {
  // TODO: implement useCandidates
  const { candidates, updateCandidate } = useCandidates();
  // TODO: implement onSelect
  const onSelect = (_id: string, _selected?: boolean) => {
    candidates?.map((candidate) => {
      if (candidate.id === _id) {
        const updatedCandidate = {
          ...candidate,
          selected: !candidate.selected,
        };
        updateCandidate(updatedCandidate);
      }
    });
  };

  return (
    <>
      <Navbar />

      <main className={styles.main}>
        {/* TODO: add list of selectable candidates here */}
        <CandidateList candidates={candidates} onSelect={onSelect} />
        <Container title="Candidate Performance" className={styles.performance}>
          {candidates ? (
            <Plot
              ingredient="sugar"
              candidates={candidates}
              maxSelections={MAX_SELECTIONS}
              onSelect={onSelect}
            />
          ) : (
            "loading..."
          )}
        </Container>
      </main>
    </>
  );
}
