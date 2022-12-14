import { BlackOperation } from "./BlackOperation";
import { BlackOperationNames } from "./data/BlackOperationNames";

export const BlackOperations: Record<string, BlackOperation> = {};

(function () {
  BlackOperations[BlackOperationNames.OperationTyphoon] = new BlackOperation({
    name: BlackOperationNames.OperationTyphoon,
    baseDifficulty: 2000,
    reqdRank: 2.5e3,
    rankGain: 50,
    rankLoss: 10,
    hpLoss: 100,
    weights: {
      hack: 0.1,
      str: 0.2,
      def: 0.2,
      dex: 0.2,
      agi: 0.2,
      cha: 0,
      int: 0.1,
    },
    decays: {
      hack: 0.6,
      str: 0.8,
      def: 0.8,
      dex: 0.8,
      agi: 0.8,
      cha: 0,
      int: 0.75,
    },
    isKill: true,
  });
  BlackOperations[BlackOperationNames.OperationZero] = new BlackOperation({
    name: BlackOperationNames.OperationZero,
    baseDifficulty: 2500,
    reqdRank: 5e3,
    rankGain: 60,
    rankLoss: 15,
    hpLoss: 50,
    weights: {
      hack: 0.2,
      str: 0.15,
      def: 0.15,
      dex: 0.2,
      agi: 0.2,
      cha: 0,
      int: 0.1,
    },
    decays: {
      hack: 0.6,
      str: 0.8,
      def: 0.8,
      dex: 0.8,
      agi: 0.8,
      cha: 0,
      int: 0.75,
    },
    isStealth: true,
  });
  BlackOperations[BlackOperationNames.OperationX] = new BlackOperation({
    name: BlackOperationNames.OperationX,
    baseDifficulty: 3000,
    reqdRank: 7.5e3,
    rankGain: 75,
    rankLoss: 15,
    hpLoss: 100,
    weights: {
      hack: 0.1,
      str: 0.2,
      def: 0.2,
      dex: 0.2,
      agi: 0.2,
      cha: 0,
      int: 0.1,
    },
    decays: {
      hack: 0.6,
      str: 0.8,
      def: 0.8,
      dex: 0.8,
      agi: 0.8,
      cha: 0,
      int: 0.75,
    },
    isKill: true,
  });
  BlackOperations[BlackOperationNames.OperationTitan] = new BlackOperation({
    name: BlackOperationNames.OperationTitan,
    baseDifficulty: 4000,
    reqdRank: 10e3,
    rankGain: 100,
    rankLoss: 20,
    hpLoss: 100,
    weights: {
      hack: 0.1,
      str: 0.2,
      def: 0.2,
      dex: 0.2,
      agi: 0.2,
      cha: 0,
      int: 0.1,
    },
    decays: {
      hack: 0.6,
      str: 0.8,
      def: 0.8,
      dex: 0.8,
      agi: 0.8,
      cha: 0,
      int: 0.75,
    },
    isKill: true,
  });
  BlackOperations[BlackOperationNames.OperationAres] = new BlackOperation({
    name: BlackOperationNames.OperationAres,
    baseDifficulty: 5000,
    reqdRank: 12.5e3,
    rankGain: 125,
    rankLoss: 20,
    hpLoss: 200,
    weights: {
      hack: 0,
      str: 0.25,
      def: 0.25,
      dex: 0.25,
      agi: 0.25,
      cha: 0,
      int: 0,
    },
    decays: {
      hack: 0,
      str: 0.8,
      def: 0.8,
      dex: 0.8,
      agi: 0.8,
      cha: 0,
      int: 0.75,
    },
    isKill: true,
  });
  BlackOperations[BlackOperationNames.OperationArchangel] = new BlackOperation({
    name: BlackOperationNames.OperationArchangel,
    baseDifficulty: 7500,
    reqdRank: 15e3,
    rankGain: 200,
    rankLoss: 20,
    hpLoss: 25,
    weights: {
      hack: 0,
      str: 0.2,
      def: 0.2,
      dex: 0.3,
      agi: 0.3,
      cha: 0,
      int: 0,
    },
    decays: {
      hack: 0,
      str: 0.8,
      def: 0.8,
      dex: 0.8,
      agi: 0.8,
      cha: 0,
      int: 0.75,
    },
    isKill: true,
  });
  BlackOperations[BlackOperationNames.OperationJuggernaut] = new BlackOperation({
    name: BlackOperationNames.OperationJuggernaut,
    baseDifficulty: 10e3,
    reqdRank: 20e3,
    rankGain: 300,
    rankLoss: 40,
    hpLoss: 300,
    weights: {
      hack: 0,
      str: 0.25,
      def: 0.25,
      dex: 0.25,
      agi: 0.25,
      cha: 0,
      int: 0,
    },
    decays: {
      hack: 0,
      str: 0.8,
      def: 0.8,
      dex: 0.8,
      agi: 0.8,
      cha: 0,
      int: 0.75,
    },
    isKill: true,
  });
  BlackOperations[BlackOperationNames.OperationRedDragon] = new BlackOperation({
    name: BlackOperationNames.OperationRedDragon,
    baseDifficulty: 12.5e3,
    reqdRank: 25e3,
    rankGain: 500,
    rankLoss: 50,
    hpLoss: 500,
    weights: {
      hack: 0.05,
      str: 0.2,
      def: 0.2,
      dex: 0.25,
      agi: 0.25,
      cha: 0,
      int: 0.05,
    },
    decays: {
      hack: 0.6,
      str: 0.8,
      def: 0.8,
      dex: 0.8,
      agi: 0.8,
      cha: 0,
      int: 0.75,
    },
    isKill: true,
  });
  BlackOperations[BlackOperationNames.OperationK] = new BlackOperation({
    name: BlackOperationNames.OperationK,
    baseDifficulty: 15e3,
    reqdRank: 30e3,
    rankGain: 750,
    rankLoss: 60,
    hpLoss: 1000,
    weights: {
      hack: 0.05,
      str: 0.2,
      def: 0.2,
      dex: 0.25,
      agi: 0.25,
      cha: 0,
      int: 0.05,
    },
    decays: {
      hack: 0.6,
      str: 0.8,
      def: 0.8,
      dex: 0.8,
      agi: 0.8,
      cha: 0,
      int: 0.75,
    },
    isKill: true,
  });
  BlackOperations[BlackOperationNames.OperationDeckard] = new BlackOperation({
    name: BlackOperationNames.OperationDeckard,
    baseDifficulty: 20e3,
    reqdRank: 40e3,
    rankGain: 1e3,
    rankLoss: 75,
    hpLoss: 200,
    weights: {
      hack: 0,
      str: 0.24,
      def: 0.24,
      dex: 0.24,
      agi: 0.24,
      cha: 0,
      int: 0.04,
    },
    decays: {
      hack: 0,
      str: 0.8,
      def: 0.8,
      dex: 0.8,
      agi: 0.8,
      cha: 0,
      int: 0.75,
    },
    isKill: true,
  });
  BlackOperations[BlackOperationNames.OperationTyrell] = new BlackOperation({
    name: BlackOperationNames.OperationTyrell,
    baseDifficulty: 25e3,
    reqdRank: 50e3,
    rankGain: 1.5e3,
    rankLoss: 100,
    hpLoss: 500,
    weights: {
      hack: 0.1,
      str: 0.2,
      def: 0.2,
      dex: 0.2,
      agi: 0.2,
      cha: 0,
      int: 0.1,
    },
    decays: {
      hack: 0.6,
      str: 0.8,
      def: 0.8,
      dex: 0.8,
      agi: 0.8,
      cha: 0,
      int: 0.75,
    },
    isKill: true,
  });
  BlackOperations[BlackOperationNames.OperationWallace] = new BlackOperation({
    name: BlackOperationNames.OperationWallace,
    baseDifficulty: 30e3,
    reqdRank: 75e3,
    rankGain: 2e3,
    rankLoss: 150,
    hpLoss: 1500,
    weights: {
      hack: 0,
      str: 0.24,
      def: 0.24,
      dex: 0.24,
      agi: 0.24,
      cha: 0,
      int: 0.04,
    },
    decays: {
      hack: 0.6,
      str: 0.8,
      def: 0.8,
      dex: 0.8,
      agi: 0.8,
      cha: 0,
      int: 0.75,
    },
    isKill: true,
  });
  BlackOperations[BlackOperationNames.OperationShoulderOfOrion] = new BlackOperation({
    name: BlackOperationNames.OperationShoulderOfOrion,
    baseDifficulty: 35e3,
    reqdRank: 100e3,
    rankGain: 2.5e3,
    rankLoss: 500,
    hpLoss: 1500,
    weights: {
      hack: 0.1,
      str: 0.2,
      def: 0.2,
      dex: 0.2,
      agi: 0.2,
      cha: 0,
      int: 0.1,
    },
    decays: {
      hack: 0.6,
      str: 0.8,
      def: 0.8,
      dex: 0.8,
      agi: 0.8,
      cha: 0,
      int: 0.75,
    },
    isStealth: true,
  });
  BlackOperations[BlackOperationNames.OperationHyron] = new BlackOperation({
    name: BlackOperationNames.OperationHyron,
    baseDifficulty: 40e3,
    reqdRank: 125e3,
    rankGain: 3e3,
    rankLoss: 1e3,
    hpLoss: 500,
    weights: {
      hack: 0.1,
      str: 0.2,
      def: 0.2,
      dex: 0.2,
      agi: 0.2,
      cha: 0,
      int: 0.1,
    },
    decays: {
      hack: 0.6,
      str: 0.8,
      def: 0.8,
      dex: 0.8,
      agi: 0.8,
      cha: 0,
      int: 0.75,
    },
    isKill: true,
  });
  BlackOperations[BlackOperationNames.OperationMorpheus] = new BlackOperation({
    name: BlackOperationNames.OperationMorpheus,
    baseDifficulty: 45e3,
    reqdRank: 150e3,
    rankGain: 4e3,
    rankLoss: 1e3,
    hpLoss: 100,
    weights: {
      hack: 0.05,
      str: 0.15,
      def: 0.15,
      dex: 0.3,
      agi: 0.3,
      cha: 0,
      int: 0.05,
    },
    decays: {
      hack: 0.6,
      str: 0.8,
      def: 0.8,
      dex: 0.8,
      agi: 0.8,
      cha: 0,
      int: 0.75,
    },
    isStealth: true,
  });
  BlackOperations[BlackOperationNames.OperationIonStorm] = new BlackOperation({
    name: BlackOperationNames.OperationIonStorm,
    baseDifficulty: 50e3,
    reqdRank: 175e3,
    rankGain: 5e3,
    rankLoss: 1e3,
    hpLoss: 5000,
    weights: {
      hack: 0,
      str: 0.24,
      def: 0.24,
      dex: 0.24,
      agi: 0.24,
      cha: 0,
      int: 0.04,
    },
    decays: {
      hack: 0.6,
      str: 0.8,
      def: 0.8,
      dex: 0.8,
      agi: 0.8,
      cha: 0,
      int: 0.75,
    },
    isKill: true,
  });
  BlackOperations[BlackOperationNames.OperationAnnihilus] = new BlackOperation({
    name: BlackOperationNames.OperationAnnihilus,
    baseDifficulty: 55e3,
    reqdRank: 200e3,
    rankGain: 7.5e3,
    rankLoss: 1e3,
    hpLoss: 10e3,
    weights: {
      hack: 0,
      str: 0.24,
      def: 0.24,
      dex: 0.24,
      agi: 0.24,
      cha: 0,
      int: 0.04,
    },
    decays: {
      hack: 0.6,
      str: 0.8,
      def: 0.8,
      dex: 0.8,
      agi: 0.8,
      cha: 0,
      int: 0.75,
    },
    isKill: true,
  });
  BlackOperations[BlackOperationNames.OperationUltron] = new BlackOperation({
    name: BlackOperationNames.OperationUltron,
    baseDifficulty: 60e3,
    reqdRank: 250e3,
    rankGain: 10e3,
    rankLoss: 2e3,
    hpLoss: 10e3,
    weights: {
      hack: 0.1,
      str: 0.2,
      def: 0.2,
      dex: 0.2,
      agi: 0.2,
      cha: 0,
      int: 0.1,
    },
    decays: {
      hack: 0.6,
      str: 0.8,
      def: 0.8,
      dex: 0.8,
      agi: 0.8,
      cha: 0,
      int: 0.75,
    },
    isKill: true,
  });
  BlackOperations[BlackOperationNames.OperationCenturion] = new BlackOperation({
    name: BlackOperationNames.OperationCenturion,
    baseDifficulty: 70e3,
    reqdRank: 300e3,
    rankGain: 15e3,
    rankLoss: 5e3,
    hpLoss: 10e3,
    weights: {
      hack: 0.1,
      str: 0.2,
      def: 0.2,
      dex: 0.2,
      agi: 0.2,
      cha: 0,
      int: 0.1,
    },
    decays: {
      hack: 0.6,
      str: 0.8,
      def: 0.8,
      dex: 0.8,
      agi: 0.8,
      cha: 0,
      int: 0.75,
    },
  });
  BlackOperations[BlackOperationNames.OperationVindictus] = new BlackOperation({
    name: BlackOperationNames.OperationVindictus,
    baseDifficulty: 75e3,
    reqdRank: 350e3,
    rankGain: 20e3,
    rankLoss: 20e3,
    hpLoss: 20e3,
    weights: {
      hack: 0.1,
      str: 0.2,
      def: 0.2,
      dex: 0.2,
      agi: 0.2,
      cha: 0,
      int: 0.1,
    },
    decays: {
      hack: 0.6,
      str: 0.8,
      def: 0.8,
      dex: 0.8,
      agi: 0.8,
      cha: 0,
      int: 0.75,
    },
  });
  BlackOperations[BlackOperationNames.OperationDaedalus] = new BlackOperation({
    name: BlackOperationNames.OperationDaedalus,
    baseDifficulty: 80e3,
    reqdRank: 400e3,
    rankGain: 40e3,
    rankLoss: 10e3,
    hpLoss: 100e3,
    weights: {
      hack: 0.1,
      str: 0.2,
      def: 0.2,
      dex: 0.2,
      agi: 0.2,
      cha: 0,
      int: 0.1,
    },
    decays: {
      hack: 0.6,
      str: 0.8,
      def: 0.8,
      dex: 0.8,
      agi: 0.8,
      cha: 0,
      int: 0.75,
    },
  });
})();
