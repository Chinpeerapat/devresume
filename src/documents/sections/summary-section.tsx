import { Summary } from "../../types";
import { Link, Text } from "@react-pdf/renderer";
import {
  EventHighlightItem,
  EventItem,
  EventsSection,
} from "../events-section";
import { ReactElement } from "react";
import { Theme } from "../theme";

export type SummaryItemProps = {
  Summary: Summary;
  theme: Theme;
};

export function SummaryItem({ Summary, theme }: SummaryItemProps) {
  const titleDetails: Array<ReactElement> = [];

  // if (job.name) {
  //   titleDetails.push(
  //     <Link
  //       src={job.url || ""}
  //       style={{ color: theme.color.text, textDecoration: "none" }}
  //     >
  //       {job.name}
  //     </Link>
  //   );
  // }

  // if (job.location) {
  //   titleDetails.push(
  //     <Text style={{ color: theme.color.lightText }}>{job.location}</Text>
  //   );
  // }

  return (
    <EventItem>
      {Summary.highlights &&
        Array.isArray(Summary.highlights) &&
        Summary.highlights.map(
          (summary) =>
            highlight && (
              <EventHighlightItem key={highlight}>
                {highlight}
              </EventHighlightItem>
            )
        )}
    </EventItem>
  );
}

//

type SectionProps = {
  summary: Array<Summary | null>;
  theme: Theme;
};

export function SummarySection({ Summary, theme }: SectionProps) {
  return (
    <EventsSection theme={theme} title="Career Summary">
      {Summary.map(
        (Summary, index) => Summary && <SummaryItem key={index} theme={theme} Summary={Summary} />
      )}
    </EventsSection>
  );
}
