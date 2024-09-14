import { useState } from "react";
import { CustomButton, CustomInput, Layout } from "../../components";

export const Projects = () => {
  const [projectName, setProjectName] = useState("");
  const handleAddProject = () => {
    setProjectName("");
  };

  return (
    <Layout>
      <h1>ProjectPage</h1>
      <CustomInput
        name={projectName}
        placeholder="プロジェクト名"
        onChange={(e) => setProjectName(e.target.value)}
      />
      <CustomButton onClick={handleAddProject} />
      <ul></ul>
    </Layout>
  );
};
