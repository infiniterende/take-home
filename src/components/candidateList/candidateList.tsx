import React, { useMemo } from "react";

import { MAX_SELECTIONS } from "../../app";
import { Candidate } from "../../resources/candidate";

export function CandidateList({
  candidates,
  onSelect,
}: {
  candidates: Candidate[] | undefined;
  onSelect: (_id: string, _selected?: boolean) => void;
}) {
  const selectedCandidates = useMemo(
    () => candidates?.filter((candidate) => candidate.selected),
    [candidates]
  );

  return (
    <div>
      <h4>Ranked Candidates</h4>
      <table>
        <th>
          <td>Score</td>
          <td>Title</td>
        </th>
      </table>
      {candidates?.map((candidate: Candidate) => (
        <tr key={candidate.id}>
          <td>{candidate.score}</td>
          <td>
            <label>
              {candidate.id}
              <input
                type="checkbox"
                role="checkbox"
                name={candidate.id}
                checked={candidate.selected}
                disabled={
                  selectedCandidates &&
                  selectedCandidates?.length >= MAX_SELECTIONS - 1
                }
                onChange={() => onSelect(candidate.id)}
              />
            </label>
          </td>
        </tr>
      ))}
    </div>
  );
}
