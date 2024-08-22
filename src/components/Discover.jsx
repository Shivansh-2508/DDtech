import React from "react";
import Section from "./Section";
import imageWhiteboard from "@/images/whiteboard.jpg";
import { TagList, TagListItem } from "./TagList";

const Discover = () => {
  return (
    <Section title="Discover" image={{ src: imageWhiteboard, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We work closely with our clients to understand their{" "}
          <strong className="font-semibold text-neutral-950">needs</strong> and
          goals, embedding ourselves in their daily operations to gain a deep
          understanding of their business dynamics.
        </p>
        <p>
          Our team conducts thorough research and analysis, including
          stakeholder interviews and process evaluations, to uncover key
          insights and areas for improvement. We leverage this information to
          develop tailored strategies that align with your business objectives.
        </p>
        <p>
          Upon completion of our comprehensive audit, we provide a detailed
          <strong className="font-semibold text-neutral-950">plan</strong> and
          actionable recommendations, along with a clear budget outline to help
          you achieve your goals efficiently.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>In-depth questionnaires</TagListItem>
        <TagListItem>Feasibility studies</TagListItem>
        <TagListItem>Employee surveys</TagListItem>
        <TagListItem>Proofs-of-concept</TagListItem>
        <TagListItem>Forensic audit</TagListItem>
        <TagListItem>Stakeholder interviews</TagListItem>
      </TagList>
    </Section>
  );
};

export default Discover;
