import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ReactMarkdown from "react-markdown";

const templates = {
  standard: `# [Project Name]

## Description
[Project Description]

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
[Installation Instructions]

## Usage
[Usage Information]

## License
This project is licensed under the [License] license.

## Contributing
[Contribution Guidelines]

## Tests
[Test Instructions]

## Questions
[Questions Information]`,
  minimal: `# [Project Name]

[Project Description]

## Installation
[Installation Instructions]

## Usage
[Usage Information]

## License
[License]

## Questions
[Questions Information]`,
  detailed: `# [Project Name]

## Description
[Project Description]

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)
- [Acknowledgments](#acknowledgments)

## Installation
[Installation Instructions]

## Usage
[Usage Information]

## Features
[Key Features]

## Contributing
[Contribution Guidelines]

## Tests
[Test Instructions]

## License
This project is licensed under the [License] license.

## Questions
[Questions Information]

## Acknowledgments
[Acknowledgments]`,
};

export default function Component() {
  const [projectDetails, setProjectDetails] = useState({
    name: "",
    description: "",
    installation: "",
    usage: "",
    license: "",
    contributing: "",
    tests: "",
    questions: "",
    features: "",
    acknowledgments: "",
  });
  const [selectedTemplate, setSelectedTemplate] = useState("standard");
  const [readmeContent, setReadmeContent] = useState("");

  useEffect(() => {
    generateReadme();
  }, [projectDetails, selectedTemplate]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProjectDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setProjectDetails((prev) => ({ ...prev, license: value }));
  };

  const generateReadme = () => {
    let content = templates[selectedTemplate as keyof typeof templates];
    Object.entries(projectDetails).forEach(([key, value]) => {
      content = content.replace(
        `[${key.charAt(0).toUpperCase() + key.slice(1)}]`,
        value || `[${key.charAt(0).toUpperCase() + key.slice(1)}]`
      );
    });
    setReadmeContent(content);
  };

  const downloadReadme = () => {
    const blob = new Blob([readmeContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "README.md";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <h1 className="text-3xl font-bold mb-6">README File Generator</h1>
      <Tabs defaultValue="edit">
        <TabsList className="mb-4">
          <TabsTrigger value="edit">Edit</TabsTrigger>
          <TabsTrigger value="preview">Preview</TabsTrigger>
        </TabsList>
        <TabsContent value="edit">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold mb-4">Project Details</h2>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name">Project Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={projectDetails.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      name="description"
                      value={projectDetails.description}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="installation">Installation</Label>
                    <Textarea
                      id="installation"
                      name="installation"
                      value={projectDetails.installation}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="usage">Usage</Label>
                    <Textarea
                      id="usage"
                      name="usage"
                      value={projectDetails.usage}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="license">License</Label>
                    <Select onValueChange={handleSelectChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a license" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="MIT">MIT</SelectItem>
                        <SelectItem value="Apache 2.0">Apache 2.0</SelectItem>
                        <SelectItem value="GPL 3.0">GPL 3.0</SelectItem>
                        <SelectItem value="BSD 3-Clause">
                          BSD 3-Clause
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="contributing">Contributing</Label>
                    <Textarea
                      id="contributing"
                      name="contributing"
                      value={projectDetails.contributing}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="tests">Tests</Label>
                    <Textarea
                      id="tests"
                      name="tests"
                      value={projectDetails.tests}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="questions">Questions</Label>
                    <Textarea
                      id="questions"
                      name="questions"
                      value={projectDetails.questions}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="features">Features</Label>
                    <Textarea
                      id="features"
                      name="features"
                      value={projectDetails.features}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="acknowledgments">Acknowledgments</Label>
                    <Textarea
                      id="acknowledgments"
                      name="acknowledgments"
                      value={projectDetails.acknowledgments}
                      onChange={handleInputChange}
                    />
                  </div>
                </form>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold mb-4">Customization</h2>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="template">README Template</Label>
                    <Select
                      onValueChange={setSelectedTemplate}
                      defaultValue={selectedTemplate}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a template" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard">Standard</SelectItem>
                        <SelectItem value="minimal">Minimal</SelectItem>
                        <SelectItem value="detailed">Detailed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button onClick={downloadReadme}>Download README</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="preview">
          <Card>
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-4">Markdown Preview</h2>
              <div className="border p-4 rounded-md bg-gray-50 dark:bg-gray-800">
                <ReactMarkdown>{readmeContent}</ReactMarkdown>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
