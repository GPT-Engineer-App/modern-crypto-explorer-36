import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { tradingTips } from "../data/TradingTips";
import TradingTipCard from "../components/common/TradingTipCard";

const Learn = () => {
  return (
    <Box flex="1" px={8} py={4} maxWidth="1200px" mx="auto">
      <Heading as="h1" size="2xl" mt={10} mb={8} textAlign="center">
        Trading Tips
      </Heading>
      {tradingTips.map((tip, index) => (
        <TradingTipCard key={index} tip={tip} />
      ))}
    </Box>
  );
};

export default Learn;
