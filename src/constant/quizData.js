export const quizData = [
  {
    quizId: "Q1",
    quizTitle: "PACE Satellite and Its Mission",
    image:
      "https://images.pexels.com/photos/26125144/pexels-photo-26125144/free-photo-of-a-shooting-star-is-seen-in-the-sky-above-a-tree.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    questions: [
      {
        questionId: "Q1-1",
        questionText: "What does the PACE satellite primarily study?",
        image:
          "https://i.ibb.co.com/mXXtddX/solar-system-emergence-spitzer-telescope-telescope-41951.webp",
        options: [
          { optionId: "O1-1-1", optionText: "Land formations" },
          { optionId: "O1-1-2", optionText: "Ocean color and atmosphere" },
          { optionId: "O1-1-3", optionText: "Weather patterns" },
          { optionId: "O1-1-4", optionText: "Ice caps" },
        ],
        answer: "O1-1-2",
      },
      {
        questionId: "Q1-2",
        questionText: "Which organization launched the PACE satellite?",
        image:
          "https://i.ibb.co.com/cxk8dqs/free-photo-of-a-shooting-star-is-seen-in-the-sky-above-a-tree.jpg",
        options: [
          { optionId: "O1-2-1", optionText: "ESA" },
          { optionId: "O1-2-2", optionText: "NASA" },
          { optionId: "O1-2-3", optionText: "SpaceX" },
          { optionId: "O1-2-4", optionText: "ISRO" },
        ],
        answer: "O1-2-2",
      },
      {
        questionId: "Q1-3",
        questionText: "What data does PACE provide to study climate change?",
        image: "https://i.ibb.co.com/PCx5f7K/pexels-photo-221012.webp",
        options: [
          { optionId: "O1-3-1", optionText: "Surface temperature" },
          { optionId: "O1-3-2", optionText: "Phytoplankton concentration" },
          { optionId: "O1-3-3", optionText: "Cloud properties" },
          { optionId: "O1-3-4", optionText: "All of the above" },
        ],
        answer: "O1-3-4",
      },
    ],
  },
  {
    quizId: "Q2",
    quizTitle: "Data Visualization and Tools",
    image:
      "https://images.pexels.com/photos/7948104/pexels-photo-7948104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    questions: [
      {
        questionId: "Q2-1",
        questionText: "Which tool is commonly used to visualize PACE data?",
        image: "https://i.ibb.co.com/s2Fkn0J/pexels-photo-919734.webp",
        options: [
          { optionId: "O2-1-1", optionText: "QGIS" },
          { optionId: "O2-1-2", optionText: "Excel" },
          { optionId: "O2-1-3", optionText: "Photoshop" },
          { optionId: "O2-1-4", optionText: "MS Paint" },
        ],
        answer: "O2-1-1", // Corrected to a valid answer
      },
      {
        questionId: "Q2-2",
        questionText: "Which data format is used for PACE ocean color data?",
        image:
          "https://i.ibb.co.com/qd5msGg/free-photo-of-a-close-up-of-the-water-and-rocks.jpg",
        options: [
          { optionId: "O2-2-1", optionText: "NetCDF" },
          { optionId: "O2-2-2", optionText: "PDF" },
          { optionId: "O2-2-3", optionText: "JPEG" },
          { optionId: "O2-2-4", optionText: "HTML" },
        ],
        answer: "O2-2-1",
      },
      {
        questionId: "Q2-3",
        questionText: "What is GeoJSON primarily used for?",
        image:
          "https://i.ibb.co.com/HDPx4Gq/united-states-america-map-pinpoint-23-2148232458.jpg",
        options: [
          { optionId: "O2-3-1", optionText: "Visualizing geographic data" },
          { optionId: "O2-3-2", optionText: "Saving image files" },
          {
            optionId: "O2-3-3",
            optionText: "Storing satellite telemetry data",
          },
          { optionId: "O2-3-4", optionText: "Editing video files" },
        ],
        answer: "O2-3-1",
      },
    ],
  },
  {
    quizId: "Q3",
    quizTitle: "Ocean Health and Chlorophyll Concentration",
    image:
      "https://images.pexels.com/photos/4666750/pexels-photo-4666750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    questions: [
      {
        questionId: "Q3-1",
        questionText:
          "What does high chlorophyll concentration in the ocean indicate?",
        image: "https://i.ibb.co.com/8P9nzNF/pexels-photo-998641.jpg",
        options: [
          { optionId: "O3-1-1", optionText: "High marine productivity" },
          { optionId: "O3-1-2", optionText: "Low pollution" },
          { optionId: "O3-1-3", optionText: "Reduced algae growth" },
          { optionId: "O3-1-4", optionText: "Low phytoplankton levels" },
        ],
        answer: "O3-1-1",
      },
      {
        questionId: "Q3-2",
        questionText: "How do chlorophyll concentration maps help scientists?",
        image: "https://i.ibb.co.com/6yFQY4Q/pexels-photo-3862613.jpg",
        options: [
          { optionId: "O3-2-1", optionText: "Monitor algal blooms" },
          { optionId: "O3-2-2", optionText: "Track sea temperature" },
          { optionId: "O3-2-3", optionText: "Measure air quality" },
          { optionId: "O3-2-4", optionText: "Study cloud formation" },
        ],
        answer: "O3-2-1",
      },
      {
        questionId: "Q3-3",
        questionText:
          "Which factor can affect chlorophyll concentration in the ocean?",
        image: "https://i.ibb.co.com/T8gxrzb/pexels-photo-847393.jpg",
        options: [
          { optionId: "O3-3-1", optionText: "Nutrient availability" },
          { optionId: "O3-3-2", optionText: "Air pressure" },
          { optionId: "O3-3-3", optionText: "Wind speed" },
          { optionId: "O3-3-4", optionText: "Tectonic activity" },
        ],
        answer: "O3-3-1",
      },
    ],
  },
];
